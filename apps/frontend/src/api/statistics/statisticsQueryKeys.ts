import { createQueryKeyFactory, type QueryFunctionContextCreator } from "@/lib/tanstack-query/queryKeyFactory";

const keyFactory = createQueryKeyFactory("statistics");
export const statisticsQueryKeys = {
  getGeneralStatistics: () => keyFactory.detail("getGeneralStatistics"),

  // Daily stats
  getAllDailyOffersCount: () => keyFactory.detail("getAllDailyOffersCount"),
  getDailyPositionOffersCount: () => keyFactory.detail("getDailyPositionOffersCount"),
  getDailyCategoriesOffersCount: () => keyFactory.detail("getDailyCategoriesOffersCount"),
};

export type StatisticsQueryFunctionContext = QueryFunctionContextCreator<typeof statisticsQueryKeys>;
