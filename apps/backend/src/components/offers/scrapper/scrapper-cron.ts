import dayjs from "dayjs";
import cron from "node-cron";

import { DATE_FORMAT } from "@/misc/constants";
import type { IScrapperController } from "@/components/offers/scrapper/scrapper.controller";

class ScrapperCron {
  private scrapperController: IScrapperController;

  constructor(scrapperController: IScrapperController) {
    this.scrapperController = scrapperController;
    this.initiateCronJobs();
  }

  private initiateCronJobs() {
    cron.schedule("0 7,18 * * *", async () => {
      await this.handleScrapingSequence();
    });
  }

  private async handleScrapingSequence() {
    try {
      console.log("Scrapping offers records: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
      await this.scrapperController.scrapeOffersData();

      console.log("Deleting outdated records: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
      await this.scrapperController.deleteOutdatedRecords();

      console.log("Updating metadata: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
      await this.scrapperController.updateMetadata();

      console.log("Updating statistics: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
      await this.scrapperController.updateStatistics();
    } catch (err) {
      console.log("Error in handleScrapingSequence: ", err);
    }
  }
}

export { ScrapperCron };
