<script setup lang="ts">
import { useGetDailyCategoriesOffersCount } from "@/api/statistics/getDailyCategoriesOffersCount";

import { BarChart } from "@/components/ui/chart-bar";
import { useDailyCategoriesChartData } from "@/components/views/statistics/composables/useDailyCategoriesChartData";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const { data: stats } = useGetDailyCategoriesOffersCount();
const { chartData, categoryNames } = useDailyCategoriesChartData(stats);
</script>

<template>
  <StatsTitleWrapper title="Według kategorii" v-if="categoryNames.length > 0">
    <BarChart
      class="charts"
      :data="chartData"
      type="stacked"
      index="createdAt"
      :categories="categoryNames"
      :colors="['var(--primary)', 'gold', 'orange', 'red', 'purple']"
      :rounded-corners="12"
    />
  </StatsTitleWrapper>
</template>
