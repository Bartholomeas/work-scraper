import { fetcher } from "@/utils/fetcher";
import { useQuery } from "vue-query/esm";
import type { JobOffersResponse } from "shared/src/offers/offers.types";

const OFFERS_LIST_KEY = "OFFERS_LIST_KEY";

const getOffersList = async (): Promise<JobOffersResponse | undefined> => {
  const url = `${import.meta.env.VITE_API_URL}/offers`;
  try {
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
