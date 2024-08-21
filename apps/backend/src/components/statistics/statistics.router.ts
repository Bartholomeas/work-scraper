import express, { type Router } from "express";

import type { StatisticsController } from "@/components/statistics/statistics.controller";
import { guardSecret } from "@/middleware/guard-secret";
import { SECRET_DELETE_PHRASE, SECRET_PHRASE } from "@/misc/constants";

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
    router.post("/generate-all-stats", guardSecret(SECRET_PHRASE), this.statisticsController.generateAllStatistics);
    // Daily
    // GET
    router.get("/daily/all-offers-count", this.statisticsController.getAllDailyOffersCountStatistics);
    router.get("/daily/position-offers", this.statisticsController.getDailyPositionsStatistics);
    router.get("/daily/categories", this.statisticsController.getDailyCategoryStatistics);
    router.get("/daily/workplaces", this.statisticsController.getDailyWorkplacesStatistics);
    router.get("/daily/data-sources", this.statisticsController.getDailyDataSourcesStatistics);
    // !! DELETE
    router.delete("/daily/stats", guardSecret(SECRET_DELETE_PHRASE), this.statisticsController.deleteAllDailyStats);
    // POST
    // router.post("/daily/position-offers", guardSecret(SECRET_PHRASE), this.statisticsController.daily);
    // router.post("/daily/categories", guardSecret(SECRET_PHRASE), this.statisticsController.postDailyCategoriesStatistics);
    // router.post("/daily/workplaces", guardSecret(SECRET_PHRASE), this.statisticsController.postDailyWorkplacesStatistics);

    return router;
  }
}

export { StatisticsRouter };
