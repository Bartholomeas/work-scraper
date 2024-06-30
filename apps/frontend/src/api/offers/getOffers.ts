import { useQuery } from "vue-query/esm";

import type { JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";
import { fetcher } from "@/utils/fetcher";
import { type OffersQueryFunctionContext, offersQueryKeys } from "@/api/offers/offersQueryKeys";
import { getSearchParamsAsString } from "@/utils/getSearchParamsAsString";

// const getOffersList = async (key: OffersQueryFunctionContext["getOffers"]): Promise<JobOffersResponse | undefined> => {
const getOffersList = async ({ queryKey: [props] }: OffersQueryFunctionContext["getOffers"]): Promise<JobOffersResponse | undefined> => {
  try {
    const paramsUrl = getSearchParamsAsString(props?.params);

    const url = `${import.meta.env.VITE_API_URL}/offers${paramsUrl}`;
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
