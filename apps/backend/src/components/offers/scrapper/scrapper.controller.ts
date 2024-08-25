import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { JUSTJOIN_URL, NOFLUFFJOBS_URL, PRACUJ_URL, SOLID_URL, THEPROTOCOL_URL } from "@/components/offers/helpers/offers.constants";

import { ErrorHandlerController } from "@/components/error/error-handler.controller";
import { BrowserManager } from "@/components/libs/browser-manager";

import { ScrapperCron } from "@/components/offers/scrapper/scrapper-cron";

import { ScrapperJustjoin } from "@/components/offers/scrapper/scrapper-justjoin";
import { ScrapperPracuj } from "@/components/offers/scrapper/scrapper-pracuj";
import { ScrapperSolidJobs } from "@/components/offers/scrapper/scrapper-solidjobs";
import { ScrapperNofluffjobs } from "@/components/offers/scrapper/scrapper-nofluffjobs";

import type { OffersService } from "@/components/offers/service/offers.service";
import { StatisticsService } from "@/components/statistics/statistics.service";
import { ScrapperTheProtocol } from "./scrapper-theprotocol";

type ScrapperInstances =
  | typeof ScrapperPracuj
  | typeof ScrapperJustjoin
  | typeof ScrapperSolidJobs
  | typeof ScrapperNofluffjobs
  | typeof ScrapperTheProtocol;

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
      console.log("Update categories counts");
      return await this.offersService.updateCategoriesCounts();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  }

  public async updateWorkplacesCounts() {
    try {
      console.log("Update workplaces counts");
      return await this.offersService.updateWorkplacesCounts();
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  }

  public async deleteOutdatedRecords() {
    console.log("Delete outdated records");
    await this.offersService.deleteOutdatedRecords();
  }

  public scrapeOffersData = async () => {
    try {
      const scrappers = [
        // {
        //   scrapper: ScrapperNofluffjobs,
        //   url: NOFLUFFJOBS_URL,
        // },
        {
          scrapper: ScrapperTheProtocol,
          url: THEPROTOCOL_URL,
        },
        // {
        //   scrapper: ScrapperPracuj,
        //   url: PRACUJ_URL,
        // },
        // {
        //   scrapper: ScrapperJustjoin,
        //   url: JUSTJOIN_URL,
        // },
        // {
        //   scrapper: ScrapperSolidJobs,
        //   url: SOLID_URL,
        // },
      ];

      for (const { scrapper, url } of scrappers) {
        await this.scrapeSingleService(scrapper, url);
      }

      // To prevent race conditions with Promise.all or smth its called one by another
      await this.updateAllOffersStats();

      return;
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
    }
  };

  private updateAllOffersStats = async () => {
    console.time("Update all offers stats");
    await this.deleteOutdatedRecords();
    await this.updateCategoriesCounts();
    await this.updateWorkplacesCounts();

    const statsService = new StatisticsService();
    await statsService.generateGeneralStatistics();
    console.timeEnd("Update all offers stats");
  };

  public scrapeSingleService = async <T extends ScrapperInstances>(scrapper: T, url: string) => {
    try {
      const browser = await this.browserManager.getBrowserInstance();
      const scrapperInstance = new scrapper(browser, { url });
      const scrappedData = await scrapperInstance.getScrappedData();
      await this.offersService.saveJobOffers(scrappedData.data);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    }
  };

  public scrapePracujData = async () => {
    try {
      await this.scrapeSingleService(ScrapperPracuj, PRACUJ_URL);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
      await this.updateAllOffersStats();
    }
  };
  public scrapeSolidJobsData = async () => {
    try {
      await this.scrapeSingleService(ScrapperSolidJobs, SOLID_URL);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
      await this.updateAllOffersStats();
    }
  };
  public scrapeJustJoinData = async () => {
    try {
      await this.scrapeSingleService(ScrapperJustjoin, JUSTJOIN_URL);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
      await this.updateAllOffersStats();
    }
  };
  public scrapeNoFluffJobsData = async () => {
    try {
      await this.scrapeSingleService(ScrapperNofluffjobs, NOFLUFFJOBS_URL);
    } catch (err) {
      throw ErrorHandlerController.handleError(err);
    } finally {
      await this.browserManager.closeBrowserInstance();
      await this.updateAllOffersStats();
    }
  };
}

export { ScrapperController, type IScrapperController };
