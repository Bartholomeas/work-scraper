import { NextFunction, type Request, type Response } from "express";
import { Browser, executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { offersQueryParamsSchema } from "shared/src/offers/offers.schemas";
import type { JobOffer } from "shared/src/offers/offers.types";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import type { OffersService } from "@/components/offers/service/offers.service";
import { ScrapperPracuj } from "@/components/offers/instances/scrapper-pracuj";
import { JUSTJOIN_URL, PRACUJ_URL } from "@/components/offers/helpers/offers.constants";
import { ScrapperJustjoin } from "@/components/offers/instances/scrapper-justjoin";
import { OffersCategoriesService } from "@/components/offers/service/offers-categories.service";

puppeteer.use(StealthPlugin());

class OffersController {
  private offersService: OffersService;
  private browser: Browser | undefined;
  private offersCategoriesService: OffersCategoriesService;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.getBrowserInstance();
    this.offersCategoriesService = new OffersCategoriesService();
  }

  public getOffersMetadata = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.offersService.getOffersMetadata();
      res.status(200).json(data);
    } catch (err) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(err),
        }),
      );
    }
  };

  private async checkScrapperIsUndetectable() {
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
      throw new AppError({
        statusCode: 500,
        code: ERROR_CODES.internal_error,
        message: JSON.stringify(err),
      });
    } finally {
      await this.closeBrowserInstance();
    }
  }

  public scrapeOffersData = async () => {
    try {
      await this.getBrowserInstance();

      const pracujScrapper = new ScrapperPracuj(this.browser, {
        url: PRACUJ_URL,
      });
      const justjoinScrapper = new ScrapperJustjoin(this.browser, {
        url: JUSTJOIN_URL,
      });
      await Promise.all([pracujScrapper.initializePage(), justjoinScrapper.initializePage()]);

      const isOutdated = await this.offersService.checkDataIsOutdated();
      let data: JobOffer[] = [];

      if (isOutdated) {
        data = await Promise.all([pracujScrapper.getScrappedData(), justjoinScrapper.getScrappedData()]).then(res =>
          res.flatMap(el => el.data),
        );
        await this.offersService.saveJobOffers(data);
      }
      await this.closeBrowserInstance();

      return data;
    } catch (err) {
      if (err instanceof AppError) throw err;
      else
        throw new AppError({
          statusCode: 500,
          code: ERROR_CODES.internal_error,
          message: JSON.stringify(err),
        });
    } finally {
      await this.closeBrowserInstance();
    }
  };

  public getOffers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { data: queryParams, success } = offersQueryParamsSchema.safeParse(req.query);

      const { data, meta } = await this.offersService.getJobOffers(success ? queryParams : undefined);

      res.status(200).json({
        createdAt: new Date(Date.now()),
        meta,
        data,
      });
    } catch (err) {
      next(err);
    }
  };

  public getOffersBaseCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.offersCategoriesService.getBaseCategories();
      console.log("xdd", data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  private getBrowserInstance = async (): Promise<Browser> => {
    if (!this.browser) this.browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
    return this.browser;
  };

  private closeBrowserInstance = async (): Promise<void> => {
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
}

export { OffersController };
