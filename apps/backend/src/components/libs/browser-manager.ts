import { Browser, executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";
import { AppErrorController } from "@/components/error/app-error.controller";
import { ERROR_CODES } from "@/misc/error.constants";

class BrowserManager {
  private browser: Browser | undefined;
  private static instance: BrowserManager;

  constructor() {}

  public static getInstance(): BrowserManager {
    if (!BrowserManager.instance) BrowserManager.instance = new BrowserManager();
    return BrowserManager.instance;
  }

  public async getBrowserInstance(): Promise<Browser> {
    if (!this.browser) this.browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
    return this.browser;
  }

  public closeBrowserInstance = async (): Promise<void> => {
    try {
      if (this.browser) {
        await this.browser.close();
        this.browser = undefined;
      }
    } catch (err) {
      console.log("Closing browser instance", err);
      return;
    }
    return;
  };

  public async checkScrapperIsUndetectable() {
    try {
      await this.getBrowserInstance();
      const page = await this.browser?.newPage();

      await page?.goto("https://bot.sannysoft.com/");

      const date = new Date(Date.now()).toLocaleDateString("pl").toString();
      const time = `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`;

      await page?.screenshot({
        path: `./public/images/test-${date}-${time}.jpeg`,
        type: "jpeg",
        optimizeForSpeed: true,
      });
    } catch (err) {
      console.log("Scrapper is easily detectable", err);
      throw new AppErrorController({
        statusCode: 500,
        code: ERROR_CODES.internal_error,
        message: JSON.stringify(err),
      });
    } finally {
      await this.closeBrowserInstance();
    }
  }
}

export { BrowserManager };
