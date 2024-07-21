import { createQueryKeyFactory, type QueryFunctionContextCreator } from "@/lib/tanstack-query/queryKeyFactory";

const keyFactory = createQueryKeyFactory("statistics");
export const statisticsQueryKeys = {
  getGeneralStatistics: () => keyFactory.detail("getGeneralStatistics"),
};

export type StatisticsQueryFunctionContext = QueryFunctionContextCreator<typeof statisticsQueryKeys>;
