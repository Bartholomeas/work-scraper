import type { IScrapperController } from "@/components/offers/scrapper/scrapper.controller";
import { BaseCron } from "@/components/cron-jobs/base-cron";

class ScrapperCron extends BaseCron {
  private scrapperController: IScrapperController;

  constructor(scrapperController: IScrapperController) {
    super("0 7,18 * * *");
    this.scrapperController = scrapperController;
  }

  protected async handleCronJob() {
    try {
      this.logTimestampWithMessage("Scrapping offers records");
      await this.scrapperController.scrapeOffersData();

      this.logTimestampWithMessage("Deleting outdated records");
      await this.scrapperController.deleteOutdatedRecords();

      this.logTimestampWithMessage("Updating workplaces counts");
      await this.scrapperController.updateWorkplacesCounts();

      this.logTimestampWithMessage("Updating categories counts");
      await this.scrapperController.updateCategoriesCounts();

      // this.logTimestampWithMessage("Updating metadata");
      // await this.scrapperController.updateMetadata();
      // this.logTimestampWithMessage("Updating statistics");
      // await this.scrapperController.updateStatistics();
    } catch (err) {
      console.log("Error in handleScrapingSequence: ", err);
    }
  }
}

export { ScrapperCron };
