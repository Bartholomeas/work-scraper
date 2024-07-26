import { useQuery } from "vue-query/esm";

import { dailyCategoriesResponseSchema } from "shared/src/statistics/statistics.schemas";
import type { DailyCategoriesCountResponse } from "shared/src/statistics/statistics.types";

import { STATISTICS_DAILY_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";
import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getDailyCategoriesStats = async () => {
  try {
    const url = `${STATISTICS_DAILY_URL}/categories`;
    const data = await fetcher.get<DailyCategoriesCountResponse>(url);
    return dailyCategoriesResponseSchema.parse(data);
  } catch (err) {
    throw err;
  }
};

export const useGetDailyCategoriesStats = () =>
  useQuery<DailyCategoriesCountResponse>({
    queryKey: statisticsQueryKeys.getDailyCategoriesStats(),
    queryFn: getDailyCategoriesStats,
  });
