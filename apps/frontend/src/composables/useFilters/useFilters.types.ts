import type { LocationQueryValueRaw } from "vue-router";
import type { PagePagination } from "shared/src/general/query.types";
import type { JobQueryParams, OffersQueryParams } from "shared/src/offers/offers.types";

export type FilteredRecords<T> = { [K in keyof T]: LocationQueryValueRaw | LocationQueryValueRaw[] };
export type FilterProperties = PagePagination & JobQueryParams & OffersQueryParams;
export type FilterKeys<T extends string = string> = (keyof FilterProperties | T)[];
