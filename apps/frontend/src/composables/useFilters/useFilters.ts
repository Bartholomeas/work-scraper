import { useRoute, useRouter } from "vue-router";

import type { FilterKeys } from "@/composables/useFilters/useFilters.types";
import { parseParamsRecords } from "@/composables/useFilters/useFilters.utils";
import { computed } from "vue";

const checkKeyExistsInQuery = (key: string, object: Record<string, unknown>): key is keyof typeof object =>
  key in object && typeof object[key] === "string";

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

  const query = computed(() => route.query);

  const submitFilters = <T extends Record<string, unknown> = Record<string, unknown>>(params: T = {} as T, isClearing = false) => {
    const mergedParams = isClearing ? { page: "1", ...params } : { ...query.value, page: "1", ...params };

    const filteredParams = parseParamsRecords<T>(mergedParams, filterKeys);
    router.push({
      path: "",
      query: filteredParams,
    });
  };

  const clearFiltersParams = <T extends (...args: unknown[]) => void>(cb?: T) => {
    if (cb && typeof cb === "function") cb();

    const filteredParams =
      Array.isArray(filterKeys) && filterKeys.length > 0
        ? parseParamsRecords({}, filterKeys)
        : {
            page: "1",
            orderBy: "createdAt",
            sortOrder: "asc",
          };

    router.push({
      path: "",
      query: filteredParams,
    });
  };

  const getValueOfQueryKey = <T extends string>(key: string): T | undefined =>
    checkKeyExistsInQuery(key, query.value) ? (query.value?.[key]?.toString() as T) : undefined;

  return { submitFilters, clearFiltersParams, query, getValueOfQueryKey };
};
export { useFilters };
