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
    this.setDeleteOutdatedCron();
    this.setScrapeOffersCron();
    this.setUpdateMetadataCron();
    this.setUpdateStatisticsCron();
  }

  private setDeleteOutdatedCron() {
    cron.schedule("0 0 * * *", async () => {
      try {
        console.log("Deleting outdated records: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
        await this.scrapperController.deleteOutdatedRecords();
      } catch (err) {
        console.log("Error in setDeleteOutdatedCron: ", err);
      }
    });
  }

  private setScrapeOffersCron() {
    cron.schedule("0 7,18 * * *", async () => {
      try {
        console.log("Deleting outdated records: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
        await this.scrapperController.scrapeOffersData();
      } catch (err) {
        console.log("Error in setDeleteOutdatedCron: ", err);
      }
    });
  }

  private setUpdateStatisticsCron() {
    cron.schedule("0 7,18 * * *", async () => {
      try {
        console.log("Updating statistics: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
        await this.scrapperController.updateStatistics();
      } catch (err) {
        console.log("Error in setUpdateStatisticsCron: ", err);
      }
    });
  }

  private setUpdateMetadataCron() {
    cron.schedule("0 7,18 * * *", async () => {
      try {
        console.log("Updating metadata: ", dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm:ss`));
        await this.scrapperController.updateMetadata();
      } catch (err) {
        console.log("Error in setUpdateMetadataCron: ", err);
      }
    });
  }
}

export { ScrapperCron };
