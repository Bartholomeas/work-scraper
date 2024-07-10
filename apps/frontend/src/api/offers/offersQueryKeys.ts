import { createQueryKeyFactory, type QueryFunctionContextCreator } from "@/lib/tanstack-query/queryKeyFactory";
import type { OffersQueryParams } from "shared/src/offers/offers.types";

const keyFactory = createQueryKeyFactory("offers");
export const offersQueryKeys = {
  getOffers: (params?: Partial<OffersQueryParams>) => keyFactory.list("getOffers", params),
};

export type OffersQueryFunctionContext = QueryFunctionContextCreator<typeof offersQueryKeys>;
