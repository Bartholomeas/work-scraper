import dayjs from "dayjs";
import path from "node:path";
import { type Browser, type Page } from "puppeteer";

import { FilesManagerController } from "@/components/files-manager/files-manager.controller";
import { MINUTES_TO_OUTDATE } from "@/components/offers/helpers/offers.constants";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import type { JobOffer, ScrappedDataResponse } from "shared/src/offers/offers.types";

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

  public initializePage = async () => {
    if (!this.page) this.page = await this.browser?.newPage();
    if (this.page) await this.page.goto(this.url);
  };

  public closePage = async () => {
    if (this.page) await this.page.close();
    this.page = undefined;
  };

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

  protected saveScrappedData = async <T extends object>(): Promise<JobOffer[] | null> => {
    try {
      const results: T[][] = [];
      this.maxPages = await this.getMaxPages();

      for (let pageNum = 1; pageNum <= this.maxPages; pageNum++) {
        const scrappedPage = await this.scrapePage<T>(pageNum);
        if (scrappedPage) results.push(scrappedPage);
      }
      const aggregatedData = results.flat() as T[];

      // await this.filesManager.writeToFile({
      //   data: aggregatedData,
      //   fileName,
      //   ext: "json",
      // });
      return this.standardizeData(aggregatedData);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };

  protected listenAndRestrictRequests = async (page: Page) => {
    await page?.setRequestInterception(true);

    page?.on("request", req => {
      if (["image", "stylesheet", "font"].includes(req.resourceType())) req.abort();
      else req.continue();
    });
  };

  public abstract getScrappedData(): Promise<ScrappedDataResponse>;

  protected abstract standardizeData(offers: unknown[]): JobOffer[];

  protected abstract scrapePage<T = unknown>(pageNumber: number): Promise<T[] | undefined>;

  protected abstract getMaxPages(): Promise<number>;

  // protected abstract standardizeContractTypes(data: unknown): JobOffer["contractTypes"];
}

export { ScrapperBase };
