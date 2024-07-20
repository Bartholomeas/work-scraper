import { useQuery } from "vue-query/esm";

import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";

import { OFFERS_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { offersQueryKeys } from "@/api/offers/offersQueryKeys";

export const getWorkplaces = async (): Promise<OffersWorkplaceListItem[] | undefined> => {
  try {
    const url = OFFERS_URL + "/workplaces";
    return await fetcher.get<OffersWorkplaceListItem[]>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetWorkplaces = () =>
  useQuery({
    queryKey: offersQueryKeys.getWorkplaces(),
    queryFn: getWorkplaces,
  });
