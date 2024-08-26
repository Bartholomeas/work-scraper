import { useQuery } from "vue-query/esm";

import { dailyDataSourcesResponseSchema } from "shared/src/statistics/statistics.schemas";
import type { DailyDataSourcesCountResponse } from "shared/src/statistics/statistics.types";

import { fetcher } from "@/utils/fetcher";
import { STATISTICS_DAILY_URL } from "@/constants";

import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getDailyDataSourcesStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/data-sources`;
    const data = await fetcher.get<DailyDataSourcesCountResponse>(url);
    return dailyDataSourcesResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetDailyDataSourcesStats = () =>
  useQuery<DailyDataSourcesCountResponse>({
    queryKey: statisticsQueryKeys.getDailyDataSourcesStats(),
    queryFn: getDailyDataSourcesStats,
  });
