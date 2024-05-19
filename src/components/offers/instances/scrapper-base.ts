import { type Browser, type Page } from "puppeteer";
import { type NextFunction, type Request, type Response } from "express";

export interface ScrapperBaseProps {
  url: string;
  categories?: string[];
}

class ScrapperBase {
  protected browser: Browser | undefined;
  protected page: Page | undefined;
  protected url: ScrapperBaseProps["url"];
  protected categories: ScrapperBaseProps["categories"];

  constructor(browser: Browser | undefined, { url, categories = [] }: ScrapperBaseProps) {
    this.browser = browser;
    this.url = url;
    this.categories = categories;
    this.initPage();
  }

  protected initPage = async () => {
    console.log("INIT GIT xdd");
    if (!this.page) this.page = await this.browser?.newPage();
    else {
      await this.page.goto(this.url);
    }
  };

  getScrappedList = async (req: Request, res: Response, next: NextFunction) => {
    console.log("getscrappdelist");

    res.status(200).json({
      xdd: "xdd git",
    });
  };
}

export { ScrapperBase };
