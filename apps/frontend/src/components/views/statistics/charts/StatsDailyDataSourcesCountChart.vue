<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { JOB_DATA_SOURCES } from "shared/src/constants";

import { useGetDailyDataSourcesStats } from "@/api/statistics/getDailyDataSourcesStats";
import { DATE_FORMAT } from "@/constants";

import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";
import { LineChart } from "@/components/ui/chart-line";

const { data: stats } = useGetDailyDataSourcesStats();

type JobDataSourceNames = (typeof JOB_DATA_SOURCES)[keyof typeof JOB_DATA_SOURCES]["name"];

const chartData = computed(
  () =>
    stats?.value?.map(stat => {
      const offers = stat?.dataSources?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr?.name]: curr?.count ?? 0,
        }),
        {} as Record<JobDataSourceNames, any>,
      );

      return {
        name: dayjs(stat.createdAt).format(DATE_FORMAT),
        ...offers,
      };
    }) ?? [],
);

const categories: JobDataSourceNames[] = Object.values(JOB_DATA_SOURCES)?.map(src => {
  return src?.name;
});
</script>

<template>
  <StatsTitleWrapper title="Według serwisu">
    <LineChart
      class="charts"
      :data="chartData"
      index="name"
      :colors="['var(--primary)', 'gold', 'orange', 'red']"
      :categories="categories"
    ></LineChart>
  </StatsTitleWrapper>
</template>
