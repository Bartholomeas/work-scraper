import type { JobOffer, OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { AppErrorController } from "@/components/error/app-error.controller";
import { ERROR_CODES } from "@/misc/error.constants";

import { JUSTJOIN_URL, PRACUJ_URL, SOLID_URL } from "@/components/offers/helpers/offers.constants";

import { BrowserManager } from "@/components/libs/browser-manager";

import { ScrapperCron } from "@/components/offers/scrapper/scrapper-cron";
import { ScrapperJustjoin } from "@/components/offers/scrapper/scrapper-justjoin";
import { ScrapperPracuj } from "@/components/offers/scrapper/scrapper-pracuj";
import { ScrapperSolidJobs } from "@/components/offers/scrapper/scrapper-solidjobs";

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
      throw new AppErrorController({
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
      throw new AppErrorController({
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

      // const pracujScrapper = new ScrapperPracuj(browser, {
      //   url: PRACUJ_URL,
      // });
      // const justjoinScrapper = new ScrapperJustjoin(browser, {
      //   url: JUSTJOIN_URL,
      // });
      // const solidScrapper = new ScrapperSolidJobs(browser, {
      //   url: SOLID_URL,
      // });
      // await Promise.all([justjoinScrapper.initializePage(), solidScrapper.initializePage()]);

      // // const isOutdated = await this.offersService.checkDataIsOutdated();
      // // if (isOutdated) {

      // const data = await Promise.all([
      //   // justjoinScrapper.getScrappedData(),
      //   // pracujScrapper.getScrappedData(),
      //   solidScrapper.getScrappedData(),
      // ]).then(res => res.flatMap(el => el.data));
      // // const data: JobOffer[] = await Promise.all([solidScrapper.getScrappedData()]).then(res => res.flatMap(el => el.data));

      // let data: JobOffer[] = [];

      const scrappers = [
        new ScrapperPracuj(browser, {
          url: PRACUJ_URL,
        }),
        new ScrapperJustjoin(browser, {
          url: JUSTJOIN_URL,
        }),
        new ScrapperSolidJobs(browser, {
          url: SOLID_URL,
        }),
      ];

      for (const scrapper of scrappers) {
        await scrapper.initializePage();
        const scrappedData = await scrapper.getScrappedData();
        console.log("Saving scrapped data..");
        await this.offersService.saveJobOffers(scrappedData.data);
        await scrapper.closePage();
      }

      // await this.offersService.saveJobOffers(data);

      return [];
    } catch (err) {
      if (err instanceof AppErrorController) throw err;
      else
        throw new AppErrorController({
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
