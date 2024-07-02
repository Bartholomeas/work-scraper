import { useQuery } from "vue-query/esm";

import type { JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";

import { fetcher } from "@/utils/fetcher";
import { getSearchParamsAsString } from "@/utils/getSearchParamsAsString";

import { type OffersQueryFunctionContext, offersQueryKeys } from "@/api/offers/offersQueryKeys";

const getOffersList = async ({ queryKey: [props] }: OffersQueryFunctionContext["getOffers"]): Promise<JobOffersResponse | undefined> => {
  try {
    const paramsUrl = getSearchParamsAsString(props?.params);
    console.log("XD", paramsUrl);
    const url = `${import.meta.env.VITE_API_URL}/offers${paramsUrl}`;
    return await fetcher.get<JobOffersResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetOffersList = (queryParams?: Partial<OffersQueryParams>) =>
  useQuery<JobOffersResponse | undefined>({
    queryKey: offersQueryKeys.getOffers(queryParams),
    queryFn: getOffersList,
  });
