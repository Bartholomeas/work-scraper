import type { LocationQueryValueRaw } from "vue-router";
import type { FilteredRecords, FilterKeys } from "@/composables/useFilters/useFilters.types";

/**
 * @description - Check record have passed key && it's not empty
 * @param obj - Record to check
 * @param key - Key to check
 */
export const checkRecordValueExist = <T extends Record<string, unknown>>(obj: T, key: keyof T): boolean =>
  (typeof obj[key] === "string" && !!obj[key]) || (Array.isArray(obj[key]) && obj?.[key].length > 0);

/**
 * @description - Check filterKeys are actually passed and are truthy
 * @param key
 * @param filterKeys - Optional keys to look for, and they will be only kept when this parameter is passed
 */
const filterKeysExists = (key: string, filterKeys?: FilterKeys) =>
  Array.isArray(filterKeys) && filterKeys.length > 0 && !filterKeys?.includes(key);

/**
 * @description - Omit key/values that are redundant or do not match filterKeys props
 * @param obj - Object with parameters and its values
 * @param filterKeys - Optional keys to look for, and they will be only kept when this parameter is passed
 */
export const omitRedundantProperties = <T extends Record<string, unknown>>(obj: T, filterKeys?: FilterKeys): FilteredRecords<T> => {
  const result = {} as FilteredRecords<T>;

  for (const key in obj) {
    if (checkRecordValueExist(obj, key) && (!filterKeys || filterKeysExists(key, filterKeys)))
      result[key] = obj[key] as LocationQueryValueRaw | LocationQueryValueRaw[];
  }
  return result;
};
