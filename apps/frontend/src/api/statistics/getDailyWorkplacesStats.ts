import { useQuery } from "vue-query/esm";

import type { DailyWorkplacesCountResponse } from "shared/src/statistics/statistics.types";
import { dailyWorkplacesResponseSchema } from "shared/src/statistics/statistics.schemas";

import { STATISTICS_DAILY_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";
import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getDailyWorkplacesStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/workplaces`;
    const data = await fetcher.get<DailyWorkplacesCountResponse>(url);

    return dailyWorkplacesResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetDailyWorkplacesStats = () =>
  useQuery({
    queryKey: statisticsQueryKeys.getDailyWorkplacesStats(),
    queryFn: getDailyWorkplacesStats,
  });
