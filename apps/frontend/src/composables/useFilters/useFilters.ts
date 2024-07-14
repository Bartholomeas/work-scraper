import { useRoute, useRouter } from "vue-router";

import type { FilterKeys } from "@/composables/useFilters/useFilters.types";
import { parseParamsRecords } from "@/composables/useFilters/useFilters.utils";

interface UseFiltersProps {
  filterKeys?: FilterKeys;
}

/**
 * @description -  Composable that handles applying filters to URL Search params.
 * @param filterKeys
 */
const useFilters = ({ filterKeys }: UseFiltersProps = {}) => {
  const router = useRouter();
  const route = useRoute();

  const submitFilters = <T extends Record<string, unknown> = Record<string, unknown>>(params: T = {} as T) => {
    const mergedParams = { ...route.query, page: "1", ...params };
    const filteredParams = parseParamsRecords<T>(mergedParams, filterKeys);
    router.push({
      path: "",
      query: filteredParams,
    });
  };

  const clearFiltersParams = <T extends (...args: unknown[]) => void>(cb?: T) => {
    let filteredParams;

    if (cb && typeof cb === "function") cb();

    if (Array.isArray(filterKeys) && filterKeys.length > 0) {
      filteredParams = parseParamsRecords(route.params, filterKeys);
    } else {
      filteredParams = {};
    }

    submitFilters(filteredParams);
    // router.push({ query: filteredParams });
  };

  return { submitFilters, clearFiltersParams, currentParams: route.params };
};
export { useFilters };
