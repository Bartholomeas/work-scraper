import type { IStatisticsController } from "@/components/statistics/statistics.controller";
import { BaseCron } from "@/components/cron-jobs/base-cron";

class StatisticsCron extends BaseCron {
  private statsController: IStatisticsController;

  constructor(statsController: IStatisticsController) {
    super("1 19 * * *");
    this.statsController = statsController;
  }

  protected async handleCronJob() {
    this.logTimestampWithMessage("Generate all offers count stats");
    await this.statsController.generateAllOffersCountStatistics();

    this.logTimestampWithMessage("Generate positions stats");
    await this.statsController.generateDailyPositionsStatistics();

    this.logTimestampWithMessage("Generate categories stats");
    await this.statsController.generateDailyCategoriesStatistics();

    this.logTimestampWithMessage("Generate workplaces stats");
    await this.statsController.generateDailyWorkplacesStatistics();

    this.logTimestampWithMessage("Generate workplaces stats");
    await this.statsController.generateDailyDataSourcesStatistics();
  }
}

export { StatisticsCron };
