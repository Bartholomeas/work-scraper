import path from "node:path";
import { type Browser, type Page } from "puppeteer";
import dayjs from "dayjs";

import type { JobOffer, JobQueryParams, ScrappedDataResponse } from "@shared/offers/offers.types";

import { MINUTES_TO_OUTDATE } from "@/components/offers/helpers/offers.constants";
import { FilesManagerController } from "@/components/files-manager/files-manager.controller";
import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

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
      const pagePromises: Promise<T[] | undefined>[] = [];
      this.maxPages = await this.getMaxPages();

      for (let pageNum = 1; pageNum <= this.maxPages; pageNum++) {
        pagePromises.push(this.scrapePage<T>(pageNum));
      }

      const results = await Promise.all(pagePromises);
      const aggregatedData = results.filter(Boolean).flat() as T[];
      // //TODO: writeToFileChunked probably is better in performance but getting errors while reading from file as it destroys structure and keeps multiple data arrays or smth like that. To check
      // await this.filesManager.writeToFile({
      //   data: aggregatedData,
      //   meta: {
      //     total: aggregatedData.length,
      //   },
      //   fileName: `${fileName}-data`,
      // });
      // await this.filesManager.writeToFile({
      //   data: standardizedData,
      //   meta: {
      //     total: aggregatedData.length,
      //   },
      //   fileName: `${fileName}-standardized`,
      // });
      // return (await util
      //   .promisify(this.standardizeData)(aggregatedData)
      //   .catch(err => {
      //     console.log("eror kurwa xdd", err, fileName);
      //     return [];
      //   })) as Awaited<Promise<JobOffer[]>>;
      return this.standardizeData(aggregatedData);
    } catch (err) {
      throw new AppError({
        statusCode: 400,
        code: ERROR_CODES.invalid_data,
        message: `SaveScrappedData: ${JSON.stringify(err)}`,
      });
    }
  };

  // public abstract getScrappedData(query?: JobQueryParams): Promise<JobOffer[] | null>;
  public abstract getScrappedData(query?: JobQueryParams): Promise<ScrappedDataResponse>;

  protected abstract standardizeData(offers: unknown[]): JobOffer[];

  protected abstract scrapePage<T = unknown>(pageNumber: number): Promise<T[] | undefined>;

  protected abstract getMaxPages(): Promise<number>;

  protected abstract standardizeContractTypes(data: unknown): JobOffer["contractTypes"];
}

export { ScrapperBase };
