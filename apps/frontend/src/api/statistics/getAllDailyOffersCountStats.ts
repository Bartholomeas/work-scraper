import { useQuery } from "vue-query/esm";

import { dailyAllOffersCountResponseSchema } from "shared/src/statistics/statistics.schemas";
import type { DailyAllOffersCountResponse } from "shared/src/statistics/statistics.types";

import { STATISTICS_DAILY_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getAllDailyOffersCountStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/all-offers-count`;
    const data = await fetcher.get<DailyAllOffersCountResponse>(url);
    return dailyAllOffersCountResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetAllDailyOffersCountStats = () =>
  useQuery({
    queryKey: statisticsQueryKeys.getAllDailyOffersCountStats(),
    queryFn: getAllDailyOffersCountStats,
  });
