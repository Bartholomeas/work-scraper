<script setup lang="ts">
import { useGetDailyCategoriesStats } from "@/api/statistics/getDailyCategoriesStats";

import { BarChart } from "@/components/ui/chart-bar";
import { useDailyCategoriesChartData } from "@/components/views/statistics/composables/useDailyCategoriesChartData";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const { data: stats } = useGetDailyCategoriesStats();
const { chartData, categoryNames } = useDailyCategoriesChartData(stats);
</script>

<template>
  <StatsTitleWrapper title="Według miasta" v-if="categoryNames.length > 0">
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
