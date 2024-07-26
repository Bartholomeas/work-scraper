import { useQuery } from "vue-query/esm";

import { dailyPositionsCountResponseSchema } from "shared/src/statistics/statistics.schemas";
import type { DailyPositionsCountResponse } from "shared/src/statistics/statistics.types";

import { STATISTICS_DAILY_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getDailyPositionsStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/position-offers`;
    const data = await fetcher.get<DailyPositionsCountResponse>(url);
    return dailyPositionsCountResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetDailyPositionsStats = () =>
  useQuery({
    queryKey: statisticsQueryKeys.getDailyPositionStats(),
    queryFn: getDailyPositionsStats,
  });
