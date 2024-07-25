<script setup lang="ts">
import { watch } from "vue";

import { useGetDailyCategoriesOffersCount } from "@/api/statistics/getDailyCategoriesOffersCount";

import { BarChart } from "@/components/ui/chart-bar";
import { useDailyCategoriesChartData } from "@/components/views/statistics/composables/useDailyCategoriesChartData";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const { data: stats } = useGetDailyCategoriesOffersCount();
const { chartData, categoryNames } = useDailyCategoriesChartData(stats);

watch(categoryNames, newVal => {
  console.log("Xdd", newVal);
});
</script>

<template>
  <StatsTitleWrapper title="Według kategorii">
    <BarChart
      class="charts"
      :data="chartData"
      index="createdAt"
      :categories="categoryNames"
      :colors="['var(--primary)', 'gold', 'orange', 'red', 'purple']"
      :rounded-corners="16"
    />
  </StatsTitleWrapper>
</template>
