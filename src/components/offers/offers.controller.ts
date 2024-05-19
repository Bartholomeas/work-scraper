import { NextFunction, type Request, type Response } from "express";
import { Browser, executablePath, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { type OffersService } from "./offers.service";
import { AppError } from "../../utils/app-error";

class OffersController {
  private offersService: OffersService;
  private browser: Browser | undefined;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.initBrowser();
  }

  private initBrowser = async () => {
    try {
      if (this.browser)
        return this.browser;
      return this.browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
    } catch (err) {
      throw err;
    }
  };


  private closeBrowser = async () => {
    if (this.browser)
      await this.browser.close();
    return;
  };

  getOffers = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.pageUrl) throw new AppError("There is no page url!", 400);
    let page: Page | undefined;

    try {
      puppeteer.use(StealthPlugin());
      const { pageUrl } = req.body;

      page = await this.browser?.newPage();
      await page?.goto(pageUrl);

      const date = new Date(Date.now()).toLocaleDateString("pl").toString();
      const time = `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`;

      await page?.screenshot({
        path: `./assets/test-${date}-${time}.jpeg`,
        type: "jpeg",
        optimizeForSpeed: true,
      });

      await this.closeBrowser();
      res.status(200).json({
        pageUrl,
        data: [],
      });
    } catch (err) {
      if (page) await page.close();
      next(err);
    }
  };
}

export { OffersController };