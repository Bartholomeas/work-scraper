<script setup lang="ts">
import { useGetDailyWorkplacesStats } from "@/api/statistics/getDailyWorkplacesStats";

import { BarChart } from "@/components/ui/chart-bar";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";
import { useDailyWorkplacesChartData } from "@/components/views/statistics/composables/useDailyWorkplacesChartData";

const { data: stats } = useGetDailyWorkplacesStats();

const { chartData, categoryNames } = useDailyWorkplacesChartData(stats);
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
