import { useQuery } from "vue-query/esm";

import type { GeneralStatisticsResponse } from "shared/src/statistics/statistics.types";

import { STATISTICS_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { statisticsQueryKeys } from "@/api/statistics/statisticsQueryKeys";

export const getGeneralStatistics = async (): Promise<GeneralStatisticsResponse | undefined> => {
  try {
    const url = STATISTICS_URL + "/general";
    return await fetcher.get<GeneralStatisticsResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetGeneralStatistics = () =>
  useQuery({
    queryKey: statisticsQueryKeys.getGeneralStatistics(),
    queryFn: getGeneralStatistics,
  });
