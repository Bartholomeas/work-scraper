import { useQuery } from "vue-query/esm";

import type { JobOffersResponse, OffersQueryParams } from "shared/src/offers/offers.types";

import { fetcher } from "@/utils/fetcher";
import { getSearchParamsAsString } from "@/utils/getSearchParamsAsString";
import { type OffersQueryFunctionContext, offersQueryKeys } from "@/api/offers/offersQueryKeys";
import type { ReactiveQuerySearchParams } from "@/types/query.types";

const getOffersList = async ({
  queryKey: [props],
}: OffersQueryFunctionContext["getOffersList"]): Promise<JobOffersResponse | undefined> => {
  try {
    const paramsUrl = getSearchParamsAsString(props?.params);
    const url = `${import.meta.env.VITE_API_URL}/offers${paramsUrl}`;
    return await fetcher.get<JobOffersResponse>(url);
  } catch (err) {
    throw err;
  }
};

export type GetOffersListParams = ReactiveQuerySearchParams<OffersQueryParams>;

export const useGetOffersList = (queryParams?: GetOffersListParams) =>
  useQuery<JobOffersResponse | undefined>({
    queryKey: offersQueryKeys.getOffersList(queryParams),
    queryFn: getOffersList,
  });
