import type { JobOffer, OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { AppError } from "@/utils/app-error";
import { ERROR_CODES } from "@/misc/error.constants";

import { BrowserManager } from "@/components/libs/browser-manager";

import { JUSTJOIN_URL, PRACUJ_URL } from "@/components/offers/helpers/offers.constants";

import { ScrapperPracuj } from "@/components/offers/scrapper/scrapper-pracuj";
import { ScrapperJustjoin } from "@/components/offers/scrapper/scrapper-justjoin";
import { ScrapperCron } from "@/components/offers/scrapper/scrapper-cron";

import type { OffersService } from "@/components/offers/service/offers.service";

interface IScrapperController {
  updateCategoriesCounts(): Promise<OffersWorkplaceListItem[] | undefined>;

  updateWorkplacesCounts(): Promise<OffersWorkplaceListItem[] | undefined>;

  updateStatistics(): Promise<void>;

  updateMetadata(): Promise<void>;

  deleteOutdatedRecords(): Promise<void>;

  scrapeOffersData(): Promise<JobOffer[]>;
}

class ScrapperController implements IScrapperController {
  private offersService: OffersService;
  private browserManager: BrowserManager;

  constructor(offersService: OffersService) {
    this.offersService = offersService;
    this.browserManager = BrowserManager.getInstance();
    new ScrapperCron(this);
  }

  public async updateCategoriesCounts() {
    try {
      return await this.offersService.updateCategoriesCounts();
    } catch (err) {
      throw new AppError({
        statusCode: 404,
        code: ERROR_CODES.invalid_data,
        message: JSON.stringify(err),
      });
    }
  }

  public async updateWorkplacesCounts() {
    try {
      return await this.offersService.updateWorkplacesCounts();
    } catch (err) {
      throw new AppError({
        statusCode: 404,
        code: ERROR_CODES.invalid_data,
        message: JSON.stringify(err),
      });
    }
  }

  public async updateStatistics() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve("MOCK updateStatistics");
      }, 3000);
    });
  }

  public async updateMetadata() {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve("MOCK updateMetadata");
      }, 3000);
    });
  }

  public async deleteOutdatedRecords() {
    await this.offersService.deleteOutdatedRecords();
  }

  public scrapeOffersData = async () => {
    try {
      const browser = await this.browserManager.getBrowserInstance();

      const pracujScrapper = new ScrapperPracuj(browser, {
        url: PRACUJ_URL,
      });
      const justjoinScrapper = new ScrapperJustjoin(browser, {
        url: JUSTJOIN_URL,
      });
      await Promise.all([pracujScrapper.initializePage(), justjoinScrapper.initializePage()]);

      let data: JobOffer[] = [];

      // const isOutdated = await this.offersService.checkDataIsOutdated();
      // if (isOutdated) {
      data = await Promise.all([justjoinScrapper.getScrappedData(), pracujScrapper.getScrappedData()]).then(res =>
        res.flatMap(el => el.data),
      );
      await this.offersService.saveJobOffers(data);
      // }
      await this.browserManager.closeBrowserInstance();

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
      await this.browserManager.closeBrowserInstance();
    }
  };
}

export { ScrapperController, type IScrapperController };
