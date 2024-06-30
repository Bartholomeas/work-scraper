import { ref } from "vue";
import { type LocationQueryValueRaw, useRouter } from "vue-router";

type FilteredRecords<T> = { [K in keyof T]: LocationQueryValueRaw | LocationQueryValueRaw[] };

const checkRecordValueExist = <T extends Record<string, unknown>>(obj: T, key: keyof T): boolean =>
  (typeof obj[key] === "string" && !!obj[key]) || (Array.isArray(obj[key]) && obj?.[key].length > 0);

const removeEmptyAttributes = <T extends Record<string, unknown>>(obj: T): FilteredRecords<T> => {
  const result = {} as FilteredRecords<T>;

  for (const key in obj) {
    if (checkRecordValueExist(obj, key)) result[key] = obj[key] as LocationQueryValueRaw | LocationQueryValueRaw[];
  }
  return result;
};

const useFilters = () => {
  const router = useRouter();
  const val = ref(null);

  const submitFilters = <T extends Record<string, unknown>>(params: T) => {
    const filteredParams = removeEmptyAttributes<T>(params);
    console.log({ filteredParams });
    router.push({ path: "", query: { ...filteredParams } });
  };
  return { submitFilters };
};

export { useFilters };
