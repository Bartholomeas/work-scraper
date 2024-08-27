<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { useTitle } from "@vueuse/core";

import { PAGE_NAME } from "@/constants";

import Title from "@/components/common/title/Title.vue";
import Text from "@/components/common/text/Text.vue";
import StatsDailyChartSkeleton from "@/components/views/statistics/charts/StatsDailyChartSkeleton.vue";

// const StatsDailyDataSourcesCountChart = defineAsyncComponent(
//   () => import("@/components/views/statistics/charts/StatsDailyDataSourcesCountChart.vue"),
// );
const StatsDailyAllOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/charts/StatsDailyAllOffersCountChart.vue"),
);
const StatsDailyCategoriesOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/charts/StatsDailyCategoriesOffersCountChart.vue"),
);
const StatsDailyPositionsOffersCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/charts/StatsDailyPositionsOffersCountChart.vue"),
);
const StatsDailyWorkplacesCountChart = defineAsyncComponent(
  () => import("@/components/views/statistics/charts/StatsDailyWorkplacesCountChart.vue"),
);

const title = useTitle();
title.value = `Statystyki ofert | ${PAGE_NAME}`;
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <Title order="h1">Statystyki</Title>
      <Text :color="'muted'" :size="'sm'"
        >Statystyki mogą nie odzwierciedlać w pełni stanu rzeczywistego. Staramy się, aby z dnia na dzień były coraz bardziej dokładne, ale
        są jedynie przybliżonym spojrzeniem na obecną sytuację na rynku, a nie jej wiernym odzwierciedleniem. 😉</Text
      >
    </div>
    <section class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Suspense>
        <StatsDailyAllOffersCountChart />
        <template #fallback>
          <StatsDailyChartSkeleton />
        </template>
      </Suspense>
      <Suspense>
        <StatsDailyCategoriesOffersCountChart />
        <template #fallback>
          <StatsDailyChartSkeleton />
        </template>
      </Suspense>
      <Suspense>
        <StatsDailyPositionsOffersCountChart />
        <template #fallback>
          <StatsDailyChartSkeleton />
        </template>
      </Suspense>
      <Suspense>
        <StatsDailyWorkplacesCountChart />
        <template #fallback>
          <StatsDailyChartSkeleton />
        </template>
      </Suspense>
      <!--      <Suspense>-->
      <!--        <StatsDailyDataSourcesCountChart />-->
      <!--        <template #fallback>-->
      <!--          <StatsDailyChartSkeleton />-->
      <!--        </template>-->
      <!--      </Suspense>-->
    </section>
  </div>
</template>
