import path from "node:path";
import { type Browser, type Page } from "puppeteer";
import dayjs from "dayjs";

import type { JobOffer, JobQueryParams, ScrappedDataResponse } from "@/types/offers/offers.types";

import { MINUTES_TO_OUTDATE } from "@/components/offers/helpers/offers.constants";
import { FilesManagerController } from "@/components/files-manager/files-manager.controller";

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
    const pagePromises: Promise<T[] | undefined>[] = [];
    this.maxPages = await this.getMaxPages();

    for (let pageNum = 1; pageNum <= this.maxPages; pageNum++) {
      pagePromises.push(this.scrapePage<T>(pageNum));
    }

    const results = await Promise.all(pagePromises);
    const aggregatedData = results.filter(Boolean).flat() as T[]; //Add typeguard with unknown is Justjoin etc...
    const standardizedData = this.standardizeData(aggregatedData);

    try {
      await this.filesManager.saveToFile({
        data: aggregatedData,
        meta: {
          total: aggregatedData.length,
        },
        fileName: `${fileName}-data`,
      }),
        await this.filesManager.saveToFile({
          data: standardizedData,
          meta: {
            total: aggregatedData.length,
          },
          fileName: `${fileName}-standardized`,
        });
    } catch (err) {
      console.error("Error saving files", err);
    }
    return standardizedData;
  };

  // public abstract getScrappedData(query?: JobQueryParams): Promise<JobOffer[] | null>;
  public abstract getScrappedData(query?: JobQueryParams): Promise<ScrappedDataResponse>;

  protected abstract standardizeData(offers: unknown[]): JobOffer[];

  protected abstract scrapePage<T = unknown>(pageNumber: number): Promise<T[] | undefined>;

  protected abstract getMaxPages(): Promise<number>;

  protected abstract standardizeContractTypes(data: unknown): JobOffer["contractTypes"];
}

export { ScrapperBase };
