import { useQuery } from "vue-query/esm";
import { fetcher } from "@/utils/fetcher";
import { OFFERS_METADATA_KEY } from "@/api/keys";
import type { OffersMetadataResponse } from "shared/src/offers/offers.types";

export const getOffersMetadata = async (): Promise<OffersMetadataResponse | undefined> => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/offers/metadata`;
    return await fetcher.get<OffersMetadataResponse>(url);
  } catch (err) {
    throw err;
  }
};

export const useGetOffersMetadata = () =>
  useQuery<OffersMetadataResponse | undefined>({
    queryKey: [OFFERS_METADATA_KEY],
    queryFn: getOffersMetadata,
  });
