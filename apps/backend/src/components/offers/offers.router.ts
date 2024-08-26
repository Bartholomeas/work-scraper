import express, { type Router } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { guardSecret } from "@/middleware/guard-secret";
import { SECRET_PHRASE } from "@/misc/constants";
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
    router.get("/base-filters", this.offersController.getOffersBaseFilters);
    // Scrappers
    router.post("/scrape", guardSecret(SECRET_PHRASE), this.offersController.scrapeOffersData);
    router.post("/scrape/pracuj", guardSecret(SECRET_PHRASE), this.offersController.scrapePracujData);
    router.post("/scrape/solidjobs", guardSecret(SECRET_PHRASE), this.offersController.scrapeSolidJobsData);
    router.post("/scrape/justjoin", guardSecret(SECRET_PHRASE), this.offersController.scrapeJustJoinData);
    router.post("/scrape/nofluffjobs", guardSecret(SECRET_PHRASE), this.offersController.scrapperNoFluffJobsData);
    // ----
    router.delete("/delete-outdated", guardSecret(SECRET_PHRASE), this.offersController.deleteOutdatedOffers);
    router.post("/update-workplaces-count", guardSecret(SECRET_PHRASE), this.offersController.updateWorkplacesCounts);
    router.post("/update-categories-count", guardSecret(SECRET_PHRASE), this.offersController.updateCategoriesCounts);

    router.get("/workplaces", this.offersController.getAllWorkplaces);
    router.get("/", this.offersController.getOffers);
    return router;
  }
}

export { OffersRouter };
