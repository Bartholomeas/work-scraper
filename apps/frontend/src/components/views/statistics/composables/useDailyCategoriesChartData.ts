import { computed, type Ref } from "vue";
import dayjs from "dayjs";
import { DATE_FORMAT_WITH_HOURS } from "@/constants";
import type { DailyCategoriesCountResponse } from "shared/src/statistics/statistics.types";

interface ParsedCategoryRecord<T = string> {
  [key: string]: string | number;

  createdAt: string;
}

type EnsureNumericValues<T> = {
  [K in keyof T]: K extends "createdAt" ? T[K] : number;
};

type ValidParsedCategoryRecord = EnsureNumericValues<ParsedCategoryRecord>;

const useDailyCategoriesChartData = <T extends Ref<DailyCategoriesCountResponse | undefined>>(stats: T) => {
  const chartData = computed(() => {
    const categoryRecords: ValidParsedCategoryRecord[] = [];

    if (stats.value)
      for (let stat of stats.value) {
        let currentCategory = {
          createdAt: dayjs(stat.createdAt).format(DATE_FORMAT_WITH_HOURS),
        };

        for (let category of stat.categories) {
          Object.assign(currentCategory, { [category.name]: category.count });
        }
        categoryRecords.push(currentCategory as ValidParsedCategoryRecord);
      }

    return categoryRecords;
  });

  const categoryNames = computed(() => {
    const categoryNamesSet = new Set(stats?.value?.flatMap(stat => stat?.categories?.map(cat => cat.name)) ?? []);
    return Array.from(categoryNamesSet);
  });
  return { chartData, categoryNames };
};
export { useDailyCategoriesChartData };
