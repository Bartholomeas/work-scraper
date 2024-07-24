<script setup lang="ts">
import { computed } from "vue";
import { AreaChart } from "@/components/ui/chart-area";
import dayjs from "dayjs";
import { DATE_FORMAT } from "@/constants";
import { useGetDailyCategoriesOffersCount } from "@/api/statistics/getDailyCategoriesOffersCount";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const countLabel = "Liczba ofert w danym momencie";

const { data: stats } = useGetDailyCategoriesOffersCount();

const chartData = computed(
  () =>
    stats?.value?.categories?.map(stat => ({
      name: dayjs(stat.createdAt).format(`${DATE_FORMAT} HH:mm`),
      [countLabel]: 500,
    })) ?? [],
);
</script>

<template>
  <StatsTitleWrapper title="Według kategorii">
    <AreaChart class="charts" :data="chartData" index="name" :colors="['var(--primary)']" :categories="[countLabel]" />
  </StatsTitleWrapper>
</template>
