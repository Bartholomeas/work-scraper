import { Browser, executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";

class BrowserManager {
  private browser: Browser | undefined;
  private static instance: BrowserManager;

  constructor() {}

  public static getInstance(): BrowserManager {
    if (!BrowserManager.instance) BrowserManager.instance = new BrowserManager();
    return BrowserManager.instance;
  }

  public async getBrowserInstance(): Promise<Browser> {
    try {
      if (!this.browser)
        this.browser = await puppeteer.launch({
          headless: false,
          executablePath: executablePath(),
          args: ["--disable-gpu", "--disable-dev-shm-usage", "--disable-setuid-sandbox"],
        });
      return this.browser;
    } catch (err) {
      throw ErrorHandlerController.handleError(err, {
        message: `Error while getting browser instance, ${JSON.stringify(err)}`,
      });
    }
  }

  public closeBrowserInstance = async (): Promise<void> => {
    try {
      if (this.browser) {
        // await Promise.all((await this.browser.pages()).map(page => page.close()));
        await this.browser.close();
        console.log("Closed browser instance.");
        this.browser = undefined;
      }
      return;
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
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
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.closeBrowserInstance();
    }
  }
}

export { BrowserManager };
