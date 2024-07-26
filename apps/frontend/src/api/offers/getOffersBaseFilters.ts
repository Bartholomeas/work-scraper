import { useQuery } from "vue-query/esm";
import type { OffersBaseCategories } from "shared/src/offers/offers.types";

import { OFFERS_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { offersQueryKeys } from "@/api/offers/offersQueryKeys";

export const getOffersBaseFilters = async (): Promise<OffersBaseCategories | undefined> => {
  try {
    return await fetcher.get<OffersBaseCategories>(OFFERS_URL + "/base-filters");
  } catch (err) {
    throw err;
  }
};

export const useGetOffersBaseFilters = () =>
  useQuery({
    queryKey: offersQueryKeys.getOffersBaseFilters(),
    queryFn: getOffersBaseFilters,
  });
