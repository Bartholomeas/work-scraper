import { type Browser, type Page } from "puppeteer";
import type { JobOffer, JobQueryParams } from "@/types/offers/offers.types";

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

  public abstract getScrappedData(query?: JobQueryParams): Promise<JobOffer[] | null>;

  protected abstract getMaxPages(): Promise<number>;
}

export { ScrapperBase };
