  import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";
  
  import { JUSTJOIN_URL, PRACUJ_URL, SOLID_URL } from "@/components/offers/helpers/offers.constants";
  
  import { ErrorHandlerController } from "@/components/error/error-handler.controller";
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
  }
  
  export { ScrapperController, type IScrapperController };
