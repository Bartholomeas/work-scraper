import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { FilterKeys } from "@/composables/useFilters/useFilters.types";
import { omitRedundantProperties } from "@/composables/useFilters/useFilters.utils";

interface UseFiltersProps {
  filterKeys?: FilterKeys;
}

/**
 * @description -  Composable that handles applying filters to URL Search params.
 * @param filterKeys
 */
const useFilters = ({ filterKeys }: UseFiltersProps = {}) => {
  const router = useRouter();
  const { params: urlParams } = useRoute();
  const currentParams = ref({ ...urlParams });

  const submitFilters = <T extends Record<string, unknown>>(params: T) => {
    const mergedParams = { ...currentParams.value, ...params };

    const filteredParams = omitRedundantProperties<T>(mergedParams, filterKeys);
    router.push({
      query: { ...filteredParams },
    });
  };

  const clearFilters = () => {
    let filteredParams = {};

    if (Array.isArray(filterKeys) && filterKeys.length > 0) {
      filteredParams = omitRedundantProperties(urlParams, filterKeys);
    } else {
      filteredParams = {};
    }
    router.push({ query: filteredParams });
  };

  return { submitFilters, clearFilters, currentParams };
};

export { useFilters };
