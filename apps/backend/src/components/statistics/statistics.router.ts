import express, { type Router } from "express";
import type { StatisticsController } from "@/components/statistics/statistics.controller";
import { guardSecret } from "@/middleware/guard-secret";
import { SECRET_PHRASE } from "@/misc/constants";

class StatisticsRouter {
  private statisticsController: StatisticsController;

  constructor(statisticsController: StatisticsController) {
    this.statisticsController = statisticsController;
  }

  getRouter(): Router {
    const router = express.Router();
    // Default stats
    router.get("/general", this.statisticsController.getGeneralStatistics);
    router.post("/generate-general", guardSecret(SECRET_PHRASE), this.statisticsController.generateGeneralStatistics);

    // Daily
    // GET
    router.get("/daily/all-offers-count", this.statisticsController.getAllOffersCountStatistics);
    router.get("/daily/position-offers", this.statisticsController.getDailyCountStatistics);
    router.get("/daily/categories", this.statisticsController.getDailyCategoryStatistics);
    // POST
    router.post("/daily/all-offers-count", guardSecret(SECRET_PHRASE), this.statisticsController.postAllOffersCountStatistics);
    router.post("/daily/offers-count", guardSecret(SECRET_PHRASE), this.statisticsController.postDailyOffersCountStatistics);
    router.post("/daily/categories", guardSecret(SECRET_PHRASE), this.statisticsController.postDailyCategoriesStatistics);

    return router;
  }
}

export { StatisticsRouter };
