import { createQueryKeyFactory, type QueryFunctionContextCreator } from "@/lib/tanstack-query/queryKeyFactory";
import type { GetOffersListParams } from "@/api/offers/getOffers";

const keyFactory = createQueryKeyFactory("offers");
export const offersQueryKeys = {
  getOffersList: (params?: GetOffersListParams | undefined) => keyFactory.list("getOffers", params),
  getOffersBaseFilters: () => keyFactory.detail("getOffersBaseFilters"),
  getOffersMetadata: () => keyFactory.detail("getOffersMetadata"),
  getWorkplaces: () => keyFactory.list("getWorkplaces"),
};

export type OffersQueryFunctionContext = QueryFunctionContextCreator<typeof offersQueryKeys>;
