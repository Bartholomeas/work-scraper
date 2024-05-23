import { type Browser, type Page } from "puppeteer";
import type { JobOffer, JobQueryParams } from "@/types/offers/offers.types";
import dayjs from "dayjs";
import { MINUTES_TO_OUTDATE } from "@/components/offers/helpers/offers.constants";

export interface ScrapperBaseProps {
  url: string;
  categories?: string[];
}

abstract class ScrapperBase {
  protected browser: Browser | undefined;
  protected page: Page | undefined;
  protected url: ScrapperBaseProps["url"];
  protected categories: ScrapperBaseProps["categories"];
  protected maxPages: number;

  protected constructor(browser: Browser | undefined, { url, categories = [] }: ScrapperBaseProps) {
    this.browser = browser;
    this.url = url;
    this.categories = categories;
    this.maxPages = 1;
  }

  public async initialize() {
    if (!this.page) {
      this.page = await this.browser?.newPage();
      await this.page?.goto(this.url);
    } else {
      await this.page.goto(this.url);
    }
  }

  public async closePage() {
    if (this.page) await this.page.close();
    this.page = undefined;
  }

  protected isFileOutdated(date: string | undefined): boolean {
    if (!date) return true;
    const currentDate = dayjs();
    const fileDate = dayjs(date);

    const timeDiff = currentDate.diff(fileDate, "minute");
    return timeDiff > MINUTES_TO_OUTDATE;
  }

  public abstract getScrappedData(query?: JobQueryParams): Promise<JobOffer[] | null>;

  protected abstract saveScrappedDataToFile(): Promise<JobOffer[] | null>;

  protected abstract standardizeData(offers: unknown[]): JobOffer[];

  protected abstract scrapePage(pageNumber: number): Promise<unknown[] | undefined>;

  protected abstract getMaxPages(): Promise<number>;
}

export { ScrapperBase };
