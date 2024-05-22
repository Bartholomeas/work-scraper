import { NextFunction, type Request, type Response } from "express";
import { Browser, executablePath, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import type { OffersService } from "@/components/offers/offers.service";
import { ScrapperPracuj } from "@/components/offers/instances/scrapper-pracuj";

puppeteer.use(StealthPlugin());

class OffersController {
  private offersService: OffersService;
  private browser: Browser | undefined;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.initBrowser();
  }

  getOffers = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.pageUrl)
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.not_found,
          message: "There is no page url!",
        }),
      );
    let page: Page | undefined;

    try {
      const { pageUrl } = req.body;
      if (!this.browser) await this.initBrowser();

      const pracujScrapper = new ScrapperPracuj(this.browser, {
        url: "https://it.pracuj.pl/praca",
        // url: "https://pracuj.pl",
      });
      await pracujScrapper.initialize();
      const data = await pracujScrapper.getScrappedData();

      await pracujScrapper.closePage();

      // page = await this.browser?.newPage();
      // await page?.goto(pageUrl);
      //
      // const date = new Date(Date.now()).toLocaleDateString("pl").toString();
      // const time = `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`;
      //
      // await page?.screenshot({
      //   path: `./public/images/test-${date}-${time}.jpeg`,
      //   type: "jpeg",
      //   optimizeForSpeed: true,
      // });

      // await this.closeBrowser();
      res.status(200).json({
        pageUrl,
        createdAt: new Date(Date.now()),
        data,
      });
    } catch (err) {
      if (page) await page.close();
      next(err);
    }
  };

  private initBrowser = async () => {
    if (this.browser) return this.browser;
    return (this.browser = await puppeteer.launch({ headless: true, executablePath: executablePath() }));
  };

  private closeBrowser = async () => {
    if (this.browser) await this.browser.close();
    return;
  };
}

export { OffersController };
