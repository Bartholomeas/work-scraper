import express, { type Router } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { guardSecret } from "@/middleware/guard-secret";
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
    // process.env doesn't work for now, mock secret
    router.post("/scrape", guardSecret("89ed2c94-0af9-4ffa-b96c-5f4f795946d8"), this.offersController.scrapeOffersData);
    router.delete("/delete-outdated", guardSecret("89ed2c94-0af9-4ffa-b96c-5f4f795946d8"), this.offersController.deleteOutdatedOffers);
    router.post(
      "/update-workplaces-count",
      guardSecret("89ed2c94-0af9-4ffa-b96c-5f4f795946d8"),
      this.offersController.updateWorkplacesCounts,
    );
    router.post(
      "/update-categories-count",
      guardSecret("89ed2c94-0af9-4ffa-b96c-5f4f795946d8"),
      this.offersController.updateCategoriesCounts,
    );
    router.get("/workplaces", this.offersController.getAllWorkplaces);
    router.get("/", this.offersController.getOffers);
    return router;
  }
}

export { OffersRouter };
