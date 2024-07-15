import express, { type Router } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { OffersController } from "./offers.controller";

class OffersRouter {
  private offersController: OffersController;

  constructor(offersController: OffersController) {
    this.offersController = offersController;
  }

  getRouter(): Router {
    const router = express.Router();
    puppeteer.use(StealthPlugin());
    router.get("/metadata", this.offersController.getOffersMetadata);
    router.get("/base-categories", this.offersController.getOffersBaseCategories);
    router.get("/scrape", this.offersController.scrapeOffersData);
    router.delete("/delete-outdated", this.offersController.deleteOutdatedOffers);
    router.get("/", this.offersController.getOffers);
    return router;
  }
}

export { OffersRouter };
