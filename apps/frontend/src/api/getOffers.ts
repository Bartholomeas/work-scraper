import { useQuery } from "vue-query/esm";
import { fetcher } from "apps/frontend/src/utils/fetcher";
import { OFFERS_LIST_KEY } from "@/api/keys";
import type { JobOffersResponse } from "shared/src/offers/offers.types";

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
