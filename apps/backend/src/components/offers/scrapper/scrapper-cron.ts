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
      this.logTimestampWithMessage("Scrapping offers records");
      await this.scrapperController.scrapeOffersData();

      this.logTimestampWithMessage("Deleting outdated records");
      await this.scrapperController.deleteOutdatedRecords();

      // this.logTimestampWithMessage("Updating workplaces counts");
      // await this.scrapperController.updateWorkplacesCounts();

      this.logTimestampWithMessage("Updating metadata");
      await this.scrapperController.updateMetadata();

      console.log("Updating statistics: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
      await this.scrapperController.updateStatistics();
    } catch (err) {
      console.log("Error in handleScrapingSequence: ", err);
    }
  }

  private logTimestampWithMessage(message: string) {
    console.log(`${message}: `, dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
  }
}

export { ScrapperCron };
