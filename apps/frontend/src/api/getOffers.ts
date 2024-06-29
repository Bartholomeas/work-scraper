import { useQuery } from "vue-query/esm";

import type { JobOffersResponse } from "shared/src/offers/offers.types";
import { fetcher } from "@/utils/fetcher";
import { OFFERS_LIST_KEY } from "@/api/keys";

const getOffersList = async (): Promise<JobOffersResponse | undefined> => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/offers`;
    return await fetcher.get<JobOffersResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetOffersList = () =>
  useQuery<JobOffersResponse | undefined>({
    queryKey: [OFFERS_LIST_KEY],
    queryFn: getOffersList,
  });
