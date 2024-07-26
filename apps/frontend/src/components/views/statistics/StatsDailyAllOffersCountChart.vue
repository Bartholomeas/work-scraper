<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { DATE_FORMAT } from "@/constants";
import { useGetAllDailyOffersCountStats } from "@/api/statistics/getAllDailyOffersCountStats";
import { AreaChart } from "@/components/ui/chart-area";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const countLabel = "Liczba ofert w danym momencie";

const { data: stats } = useGetAllDailyOffersCountStats();

const chartData = computed(
  () =>
    stats?.value?.map(stat => ({
      name: dayjs(stat.createdAt).format(`${DATE_FORMAT} HH:mm`),
      [countLabel]: stat.totalOffers,
    })) ?? [],
);
</script>

<template>
  <StatsTitleWrapper title="Licznik wszystkich ofert">
    <AreaChart class="charts" :data="chartData" index="name" :colors="['var(--primary)']" :categories="[countLabel]" />
  </StatsTitleWrapper>
</template>
