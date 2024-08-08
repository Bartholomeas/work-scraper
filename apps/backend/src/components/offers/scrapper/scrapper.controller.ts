import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { JUSTJOIN_URL, PRACUJ_URL, SOLID_URL } from "@/components/offers/helpers/offers.constants";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { BrowserManager } from "@/components/libs/browser-manager";

import { ScrapperCron } from "@/components/offers/scrapper/scrapper-cron";
import { ScrapperJustjoin } from "@/components/offers/scrapper/scrapper-justjoin";
import { ScrapperPracuj } from "@/components/offers/scrapper/scrapper-pracuj";
import { ScrapperSolidJobs } from "@/components/offers/scrapper/scrapper-solidjobs";

import type { OffersService } from "@/components/offers/service/offers.service";

type ScrapperInstances = typeof ScrapperPracuj | typeof ScrapperJustjoin | typeof ScrapperSolidJobs;

interface IScrapperController {
  updateCategoriesCounts(): Promise<OffersWorkplaceListItem[] | undefined>;

  updateWorkplacesCounts(): Promise<OffersWorkplaceListItem[] | undefined>;

  deleteOutdatedRecords(): Promise<void>;

  scrapeOffersData(): Promise<void>;
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
      throw ErrorHandlerController.handleError(err);
    }
  }

  public async updateWorkplacesCounts() {
    try {
      return await this.offersService.updateWorkplacesCounts();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  }

  public async deleteOutdatedRecords() {
    await this.offersService.deleteOutdatedRecords();
  }

  public scrapeOffersData = async () => {
    try {
      const scrappers = [
        {
          scrapper: ScrapperPracuj,
          url: PRACUJ_URL,
        },
        {
          scrapper: ScrapperJustjoin,
          url: JUSTJOIN_URL,
        },
        {
          scrapper: ScrapperSolidJobs,
          url: SOLID_URL,
        },
      ];

      for (const { scrapper, url } of scrappers) {
        await this.scrapeSingleService(scrapper, url);
      }

      await Promise.all([this.updateCategoriesCounts(), this.updateWorkplacesCounts(), this.deleteOutdatedRecords()]);
      return;
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
    }
  };

  public scrapeSingleService = async <T extends ScrapperInstances>(scrapper: T, url: string) => {
    try {
      const browser = await this.browserManager.getBrowserInstance();

      const scrapperInstance = new scrapper(browser, { url });
      const scrappedData = await scrapperInstance.getScrappedData();
      await this.browserManager.closeBrowserInstance();
      await this.offersService.saveJobOffers(scrappedData.data);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
    }
  };
}

export { ScrapperController, type IScrapperController };
