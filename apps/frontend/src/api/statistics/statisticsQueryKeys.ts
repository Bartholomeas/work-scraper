import { createQueryKeyFactory } from "@/lib/tanstack-query/queryKeyFactory";

const keyFactory = createQueryKeyFactory("statistics");
export const statisticsQueryKeys = {
  getGeneralStatistics: () => keyFactory.detail("getGeneralStatistics"),

  // Daily stats
  getAllDailyOffersCountStats: () => keyFactory.detail("getAllDailyOffersCountStats"),
  getDailyPositionStats: () => keyFactory.detail("getDailyPositionStats"),
  getDailyCategoriesStats: () => keyFactory.detail("getDailyCategoriesStats"),
  getDailyWorkplacesStats: () => keyFactory.detail("getDailyWorkplacesStats"),
};

// export type StatisticsQueryFunctionContext = QueryFunctionContextCreator<typeof statisticsQueryKeys>;
