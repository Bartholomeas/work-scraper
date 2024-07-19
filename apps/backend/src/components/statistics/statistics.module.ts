import { StatisticsService } from "@/components/statistics/statistics.service";
import { StatisticsController } from "@/components/statistics/statistics.controller";
import { StatisticsRouter } from "@/components/statistics/statistics.router";

const service = new StatisticsService();
const controller = new StatisticsController(service);
const router = new StatisticsRouter(controller);

export const statisticsModule = {
  service,
  controller,
  router: router.getRouter(),
};
