import { useQuery } from "vue-query/esm";

import { fetcher } from "@/utils/fetcher";
import { offersQueryKeys } from "@/api/offers/offersQueryKeys";
import type { OffersWorkplaceDTO } from "shared/src/offers/offers.types";

export const getWorkplaces = async (): Promise<OffersWorkplaceDTO[] | undefined> => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/offers/workplaces`;
    return await fetcher.get<OffersWorkplaceDTO[]>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetWorkplaces = () =>
  useQuery({
    queryKey: offersQueryKeys.getWorkplaces(),
    queryFn: getWorkplaces,
  });
