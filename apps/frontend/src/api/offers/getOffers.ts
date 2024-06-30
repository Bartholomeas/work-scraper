import { useQuery } from "vue-query/esm";

import type { JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";
import { fetcher } from "@/utils/fetcher";
import { type OffersQueryFunctionContext, offersQueryKeys } from "@/api/offers/offersQueryKeys";

// const getOffersList = async (key: OffersQueryFunctionContext["getOffers"]): Promise<JobOffersResponse | undefined> => {
const getOffersList = async <T extends OffersQueryFunctionContext["getOffers"]>(key: T): Promise<JobOffersResponse | undefined> => {
  console.log("kekew", key);
  try {
    const url = `${import.meta.env.VITE_API_URL}/offers`;
    return await fetcher.get<JobOffersResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetOffersList = (queryParams: OffersQueryParams) =>
  useQuery<JobOffersResponse | undefined>({
    queryKey: offersQueryKeys.getOffers(queryParams),
    queryFn: getOffersList,
  });
