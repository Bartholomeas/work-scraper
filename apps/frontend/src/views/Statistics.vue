<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";
import Title from "@/components/common/title/Title.vue";

const StatsDailyAllOffersCountChart = defineAsyncComponent(() => import("@/components/views/statistics/StatsDailyAllOffersCountChart.vue"));
const StatsDailyCategoriesOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/StatsDailyCategoriesOffersCountChart.vue"),
);
const StatsDailyPositionsOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/StatsDailyPositionsOffersCountChart.vue"),
);
const StatsDailyWorkplacesCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/StatsDailyWorkplacesCountChart.vue"),
);

const title = useTitle();
title.value = `Statystyki ofert | ${PAGE_NAME}`;
</script>

<template>
  <div class="flex flex-col gap-6">
    <Title order="h1">Statystyki</Title>
    <section class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Suspense>
        <StatsDailyAllOffersCountChart />
        <template #fallback>
          <div>LADOWANIEEEEE</div>
        </template>
      </Suspense>
      <StatsDailyCategoriesOffersCountChart />
      <StatsDailyPositionsOffersCountChart />
      <StatsDailyWorkplacesCountChart />
    </section>
  </div>
</template>
