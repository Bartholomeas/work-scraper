<script setup lang="ts">
import Title from "@/components/common/title/Title.vue";
import { defineAsyncComponent } from "vue";

const StatsDailyAllOffersCountChart = defineAsyncComponent(() => import("@/components/views/statistics/StatsDailyAllOffersCountChart.vue"));
const StatsDailyCategoriesOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/StatsDailyCategoriesOffersCountChart.vue"),
);
const StatsDailyPositionsOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/StatsDailyPositionsOffersCountChart.vue"),
);
</script>

<template>
  <div class="flex flex-col gap-6">
    <Title order="h1">Statystyki</Title>
    <section class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <StatsDailyAllOffersCountChart />
      <StatsDailyCategoriesOffersCountChart />
      <StatsDailyPositionsOffersCountChart />
    </section>
  </div>
</template>
