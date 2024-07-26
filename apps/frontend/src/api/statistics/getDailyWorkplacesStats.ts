import { useQuery } from "vue-query/esm";

import { dailyCategoriesResponseSchema } from "shared/src/statistics/statistics.schemas";
import type { DailyCategoriesCountResponse, DailyWorkplacesCountResponse } from "shared/src/statistics/statistics.types";

import { STATISTICS_DAILY_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";
import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getDailyWorkplacesStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/workplaces`;
    const data = await fetcher.get<DailyWorkplacesCountResponse>(url);
    return dailyCategoriesResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetDailyWorkplacesStats = () =>
  useQuery<DailyCategoriesCountResponse>({
    queryKey: statisticsQueryKeys.getDailyWorkplacesStats(),
    queryFn: getDailyWorkplacesStats,
  });
