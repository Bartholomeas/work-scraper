import { useRouter } from "vue-router";
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

  const submitFilters = <T extends Record<string, unknown>>(params: T) => {
    const filteredParams = omitRedundantProperties<T>(params, filterKeys);

    router.push({ path: "", query: { ...filteredParams } });
  };

  const setSpecifiedKey = () => {};
  return { submitFilters, setSpecifiedKey };
};

export { useFilters };
