import { useQuery } from "vue-query/esm";

import { fetcher } from "@/utils/fetcher";
import { offersQueryKeys } from "@/api/offers/offersQueryKeys";
import type { OffersWorkplaceListItem } from "shared/src/offers/offers.types";

export const getWorkplaces = async (): Promise<OffersWorkplaceListItem[] | undefined> => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/offers/workplaces`;
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
