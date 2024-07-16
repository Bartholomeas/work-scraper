import path from "node:path";
import { type Browser, type Page } from "puppeteer";
import dayjs from "dayjs";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import { MINUTES_TO_OUTDATE } from "@/components/offers/helpers/offers.constants";
import { FilesManagerController } from "@/components/files-manager/files-manager.controller";

import type { JobOffer, JobQueryParams, ScrappedDataResponse } from "shared/src/offers/offers.types";

interface SaveScrappedDataToFileProps<T> {
  fileName: string;
}

export interface ScrapperBaseProps {
  url: string;
  categories?: string[];
}

abstract class ScrapperBase {
  protected browser: Browser | undefined;
  protected page: Page | undefined;
  protected filesManager: FilesManagerController;
  protected url: ScrapperBaseProps["url"];
  protected categories: ScrapperBaseProps["categories"];
  protected maxPages: number;

  protected constructor(browser: Browser | undefined, { url, categories = [] }: ScrapperBaseProps) {
    this.browser = browser;
    this.url = url;
    this.categories = categories;
    this.maxPages = 1;
    this.filesManager = new FilesManagerController(path.resolve(__dirname, "../../../../public/scrapped-data"));
  }

  public async initializePage() {
    if (!this.page) this.page = await this.browser?.newPage();
    if (this.page) await this.page.goto(this.url);
  }

  public async closePage() {
    if (this.page) await this.page.close();
    this.page = undefined;
  }

  protected isFileOutdated = async (fileName: string): Promise<boolean> => {
    const fileStat = await this.filesManager.getFileUpdatedDate({
      fileName,
    });

    if (!fileStat?.mtime) return true;
    const currentDate = dayjs();
    const fileDate = dayjs(fileStat.mtime);

    const timeDiff = currentDate.diff(fileDate, "minute");

    return timeDiff > MINUTES_TO_OUTDATE;
  };

  protected saveScrappedData = async <T extends object>({ fileName }: SaveScrappedDataToFileProps<T>): Promise<JobOffer[] | null> => {
    try {
      // const results: Promise<T[] | undefined>[] = [];
      const results: T[][] = [];
      this.maxPages = await this.getMaxPages();

      for (let pageNum = 1; pageNum <= this.maxPages; pageNum++) {
        const scrappedPage = await this.scrapePage<T>(pageNum);
        if (scrappedPage) results.push(scrappedPage);
      }
      const aggregatedData = results.flat() as T[];
      await this.filesManager.writeToFile({
        data: aggregatedData,
        fileName,
        ext: "json",
      });
      return this.standardizeData(aggregatedData);
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_data,
        message: `SaveScrappedData: ${JSON.stringify(err)}`,
      });
    }
  };

  public abstract getScrappedData(query?: JobQueryParams): Promise<ScrappedDataResponse>;

  protected abstract standardizeData(offers: unknown[]): JobOffer[];

  protected abstract scrapePage<T = unknown>(pageNumber: number): Promise<T[] | undefined>;

  protected abstract getMaxPages(): Promise<number>;

  protected abstract standardizeContractTypes(data: unknown): JobOffer["contractTypes"];
}

export { ScrapperBase };
