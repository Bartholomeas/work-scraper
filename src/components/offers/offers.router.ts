import { OffersController } from "./offers.controller";
import express from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

class OffersRouter {
  private offersController: OffersController;

  constructor(offersController: OffersController) {
    this.offersController = offersController;
  }

  getRouter() {
    const router = express.Router();
    puppeteer.use(StealthPlugin());
    router.get("/", this.offersController.getOffers);
    router.get("/:pageUrl", this.offersController.getOffers);
    return router;
  }
}

export { OffersRouter };
