import type { LocationQueryValueRaw } from "vue-router";
import type { FilteredRecords, FilterKeys } from "@/composables/useFilters/useFilters.types";

/**
 * @description - Check record have passed key && it's not empty
 * @param obj - Record to check
 * @param key - Key to check
 */
export const checkRecordValueExist = <T extends Record<string, unknown>>(obj: T, key: keyof T): boolean => {
  const value = obj[key];
  const valueType = typeof value;

  if (valueType === "undefined") return false;
  if (valueType === "number") return true;
  if (valueType === "string" && !!(value as string).trim()) return true;
  return Array.isArray(value) && value.every(Boolean) && value.length > 0;

  // return (
  //   typeof obj[key] === "number" ||
  //   (typeof obj[key] === "string" && !!obj[key].trim()) ||
  //   (Array.isArray(obj[key]) && obj?.[key].length > 0)
  // );
};

/**
 * @description - Check filterKeys are actually passed and are truthy
 * @param key
 * @param filterKeys - Optional keys to look for, and they will be only kept when this parameter is passed
 */
const filterKeysExists = (key: string, filterKeys?: FilterKeys) =>
  Array.isArray(filterKeys) && filterKeys.length > 0 && !filterKeys?.includes(key);

/**
 * @description - Omit key/values that are redundant or do not match filterKeys props
 * @param params - Object with parameters and its values
 * @param filterKeys - Optional keys to look for, and they will be only kept when this parameter is passed
 */
export const parseParamsRecords = <T extends Record<string, unknown>>(params: T, filterKeys?: FilterKeys): FilteredRecords<T> => {
  const result = {} as FilteredRecords<T>;

  for (const key in params) {
    if (checkRecordValueExist(params, key)) {
      const resultValue = Array.isArray(params[key]) ? params[key].join(",") : params[key];
      result[key] = resultValue as LocationQueryValueRaw | LocationQueryValueRaw[];
    }
  }
  return result;
};
