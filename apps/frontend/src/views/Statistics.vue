<script setup lang="ts">
import Title from "@/components/common/title/Title.vue";
import { defineAsyncComponent } from "vue";

const StatsDailyOffersCountChart = defineAsyncComponent(() => import("@/components/views/statistics/StatsDailyOffersCountChart.vue"));
</script>

<template>
  <div class="flex flex-col gap-6">
    <Title order="h1">Statystyki</Title>
    <StatsDailyOffersCountChart />
  </div>
</template>
