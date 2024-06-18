import { NextFunction, type Request, type Response } from "express";
import { Browser, executablePath, Page } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { ERROR_CODES } from "@/misc/error.constants";
import { AppError } from "@/utils/app-error";

import { offersQueryParameters } from "@shared/offers/offers.schemas";

import { JUSTJOIN_URL, PRACUJ_URL } from "@/components/offers/helpers/offers.constants";
import { ScrapperPracuj } from "@/components/offers/instances/scrapper-pracuj";
import { ScrapperJustjoin } from "@/components/offers/instances/scrapper-justjoin";

import type { OffersService } from "@/components/offers/offers.service";
import type { JobOffer, OffersQueryParams } from "@shared/offers/offers.types";

puppeteer.use(StealthPlugin());

interface FilterDataProps {
  data: JobOffer[];
  queryParams?: OffersQueryParams;
}

class OffersController {
  private offersService: OffersService;
  private browser: Browser | undefined;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.initBrowser();
  }

  public checkMetadata = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const isOutdated = await this.offersService.checkDataIsOutdated();
      res.status(200).json({ isOutdated });
    } catch (err) {
      console.log("checkMetadata err: ", err);
    }
  };

  public getOffers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const parsedParams = offersQueryParameters.safeParse(req.body);
    if (parsedParams.error) {
      next(
        new AppError({
          statusCode: 400,
          code: ERROR_CODES.invalid_type,
          message: JSON.stringify(parsedParams.error),
        }),
      );
    }

    let page: Page | undefined;

    try {
      if (!this.browser) await this.initBrowser();

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
        // data = await Promise.all([pracujScrapper.getScrappedData()]).then(res => res.flatMap(el => el.data));
        data = await Promise.all([justjoinScrapper.getScrappedData()]).then(res => res.flatMap(el => el.data));
        // data = await Promise.all([pracujScrapper.getScrappedData(), justjoinScrapper.getScrappedData()]).then(res =>
        //   res.flatMap(el => el.data),
        // );
        await this.offersService.saveJobOffers(data);
      } else {
        data = await this.offersService.getJobOffers();
      }
      // await pracujScrapper.closePage();
      // await justjoinScrapper.closePage();

      await this.closeBrowser();
      this.browser = undefined;

      // page = await this.browser?.newPage();
      // await page?.goto("https://bot.sannysoft.com/");
      //
      // const date = new Date(Date.now()).toLocaleDateString("pl").toString();
      // const time = `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`;
      //
      // await page?.screenshot({
      //   path: `./public/images/test-${date}-${time}.jpeg`,
      //   type: "jpeg",
      //   optimizeForSpeed: true,
      // });
      res.status(200).json({
        createdAt: new Date(Date.now()),
        total: data?.length,
        data: this.filterData({ data, queryParams: parsedParams.data }),
      });
    } catch (err) {
      if (page) await page.close();
      next(err);
    }
  };

  private filterData = ({ data = [], queryParams }: FilterDataProps): JobOffer[] => {
    const { search: _search, categories } = queryParams ?? {};
    if (!_search && !categories) return data;
    const search = _search?.toLowerCase();
    return data.filter(job => {
      if (search) {
        if (job.positionName && job.positionName.toLowerCase().includes(search)) return true;
        else if (job.description && job.description.toLowerCase().includes(search)) return true;
        else if (job.technologies?.some(cat => cat.includes(search))) return true;
      }
      return categories && Array.isArray(categories) && categories.some(el => job.technologies?.includes(el.toLowerCase()));
    });
    // const asyncFilter = promisify((arr: JobOffer[]) => {
    //   arr.filter(job => {
    //     if (search) {
    //       if (job.positionName.toLowerCase().includes(search.toLowerCase())) return true;
    //       else if (job.description?.toLowerCase().includes(search.toLowerCase())) return true;
    //       else if (job.technologies?.some(cat => cat.includes(search.toLowerCase()))) return true;
    //     }
    //     return !!(categories && Array.isArray(categories) && categories.every(el => job.technologies.includes(el.toLowerCase())));
    //   });
    // });
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
