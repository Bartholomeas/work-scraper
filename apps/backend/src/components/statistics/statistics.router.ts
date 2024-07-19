import express, { type Router } from "express";
import type { StatisticsController } from "@/components/statistics/statistics.controller";

class StatisticsRouter {
  private statisticsController: StatisticsController;

  constructor(statisticsController: StatisticsController) {
    this.statisticsController = statisticsController;
  }

  getRouter(): Router {
    const router = express.Router();

    router.get("/general", this.statisticsController.getGeneralStats);

    return router;
  }
}

export { StatisticsRouter };
