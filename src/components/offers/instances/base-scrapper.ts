import { Page } from "puppeteer";

interface BaseScrapperPageProps {
  url: string,
  categories: string[]
}

class BaseScrapper {
  protected page: Page | undefined;

  constructor(page: Page, { url, categories }: BaseScrapperPageProps) {
    this.page = page;
  }

  getScrappedList = async () => {
    console.log("getscrappdelist");
  };
}

export { BaseScrapper };