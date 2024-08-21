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
          headless: true,
          executablePath: executablePath(),
          args: [
            "--disable-gpu", // Disable GPU acceleration, especially useful on servers without a GPU.
            "--disable-dev-shm-usage", // Use disk files instead of shared memory, useful in environments like Docker with limited shared memory.
            "--disable-setuid-sandbox", // Disable setuid sandbox. Necessary on some servers, but could reduce security.
            "--aggressive-cache-discard", // Aggressively discard cache from memory to reduce RAM usage.
            "--disable-cache", // Completely disable browser cache to always fetch fresh data, at the cost of higher network usage.
            "--disable-application-cache", // Disable the application cache to reduce memory usage.
            "--disable-offline-load-stale-cache", // Prevent loading outdated data from cache in offline mode.
            "--disable-gpu-shader-disk-cache", // Disable caching GPU shaders on disk to save disk space.
            "--media-cache-size=0", // Set media cache size to zero to reduce memory usage for multimedia content.
            "--disk-cache-size=0", // Set disk cache size to zero to minimize disk space usage.
            "--disable-extensions", // Disable all browser extensions to reduce resource consumption.
            "--disable-default-apps", // Disable default Chromium apps to free up resources.
            "--mute-audio", // Mute audio since it's not needed for web scraping.
            "--no-default-browser-check", // Disable the check if Chromium is the default browser to avoid unnecessary prompts.
            "--disable-background-timer-throttling", // Disable throttling of background timers to improve performance of background scripts.
            "--disable-backgrounding-occluded-windows", // Prevent the browser from throttling windows that are not visible, keeping performance consistent.
            "--disable-notifications", // Disable notifications to reduce resource usage.
            "--disable-component-update", // Disable automatic component updates to reduce network usage.
            "--disable-sync", // Disable syncing with Google services to save resources.
            "--disable-images", // Disable images
          ],
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
