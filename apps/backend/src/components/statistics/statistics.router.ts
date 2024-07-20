import express, { type Router } from "express";
import type { StatisticsController } from "@/components/statistics/statistics.controller";
import { guardSecret } from "@/middleware/guard-secret";

class StatisticsRouter {
  private statisticsController: StatisticsController;

  constructor(statisticsController: StatisticsController) {
    this.statisticsController = statisticsController;
  }

  getRouter(): Router {
    const router = express.Router();

    router.get("/general", this.statisticsController.getGeneralStatistics);
    router.post(
      "/generate-general",
      guardSecret("89ed2c94-0af9-4ffa-b96c-5f4f795946d8"),
      this.statisticsController.generateGeneralStatistics,
    );

    return router;
  }
}

export { StatisticsRouter };
