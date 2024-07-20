import { useQuery } from "vue-query/esm";

import type { OffersMetadataResponse } from "shared/src/offers/offers.types";

import { OFFERS_URL } from "@/constants";
import { fetcher } from "@/utils/fetcher";

import { offersQueryKeys } from "@/api/offers/offersQueryKeys";

export const getOffersMetadata = async (): Promise<OffersMetadataResponse | undefined> => {
  try {
    const url = OFFERS_URL + "/metadata";
    return await fetcher.get<OffersMetadataResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetOffersMetadata = () =>
  useQuery<OffersMetadataResponse | undefined>({
    queryKey: offersQueryKeys.getOffersMetadata(),
    queryFn: getOffersMetadata,
  });
