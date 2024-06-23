import { NextFunction, type Request, type Response } from "express";
import { Browser, executablePath } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { ERROR_CODES } from "@/misc/error.constants";
import { AppError } from "@/utils/app-error";

import { JUSTJOIN_URL, PRACUJ_URL } from "@/components/offers/helpers/offers.constants";
import { ScrapperPracuj } from "@/components/offers/instances/scrapper-pracuj";
import { ScrapperJustjoin } from "@/components/offers/instances/scrapper-justjoin";

import type { OffersService } from "@/components/offers/offers.service";
import type { JobOffer } from "@shared/offers/offers.types";
import { offersQueryParameters } from "@shared/offers/offers.schemas";

puppeteer.use(StealthPlugin());

class OffersController {
  private offersService: OffersService;
  private browser: Browser | undefined;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.getBrowserInstance();
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
      const { data: queryParams, success } = offersQueryParameters.safeParse(req.query);

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

  // private filterData = ({ data = [], queryParams }: FilterDataProps): JobOffer[] => {
  //   const { search: _search, categories } = queryParams ?? {};
  //   if (!_search && !categories) return data;
  //   const search = _search?.toLowerCase();
  //   return data.filter(job => {
  //     if (search) {
  //       if (job.positionName && job.positionName.toLowerCase().includes(search)) return true;
  //       else if (job.description && job.description.toLowerCase().includes(search)) return true;
  //       else if (job.technologies?.some(cat => cat.includes(search))) return true;
  //     }
  //     return categories && Array.isArray(categories) && categories.some(el => job.technologies?.includes(el.toLowerCase()));
  //   });
  // };

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
