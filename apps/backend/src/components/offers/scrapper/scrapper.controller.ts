import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { JUSTJOIN_URL, PRACUJ_URL, SOLID_URL } from "@/components/offers/helpers/offers.constants";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { BrowserManager } from "@/components/libs/browser-manager";

import { ScrapperCron } from "@/components/offers/scrapper/scrapper-cron";
import { ScrapperJustjoin } from "@/components/offers/scrapper/scrapper-justjoin";
import { ScrapperPracuj } from "@/components/offers/scrapper/scrapper-pracuj";
import { ScrapperSolidJobs } from "@/components/offers/scrapper/scrapper-solidjobs";

import { ScrapperBase } from "@/components/offers/scrapper/scrapper-base";
import type { OffersService } from "@/components/offers/service/offers.service";

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
      const browser = await this.browserManager.getBrowserInstance();
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

      // async for(const scrapper of scrappers)  {}

      for (const scrapper of scrappers) {
        const scrappedData = await scrapper.getScrappedData();
        await this.offersService.saveJobOffers(scrappedData.data);
        await scrapper.closePage();
      }
      return;
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
    }
  };

  // public scrapeSingleService = async <T extends ScrapperBase>(scrapper: T, url: string) => {
  //   try {
  //     const browser = await this.browserManager.getBrowserInstance();
  //     // const scrapperInstance = new scrapper(browser, url);
  //     const scrappedData = await scrapper.getScrappedData();
  //     await this.offersService.saveJobOffers(scrappedData.data);
  //   } catch (err) {
  //     throw ErrorHandlerController.handleError(err);
  //   } finally {
  //     await this.browserManager.closeBrowserInstance();
  //   }
  // };
}

export { ScrapperController, type IScrapperController };
