<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { DATE_FORMAT_WITH_HOURS } from "@/constants";
import { useGetDailyPositionsStats } from "@/api/statistics/getDailyPositionsStats";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";
import { LineChart } from "@/components/ui/chart-line";

const juniorLabel = "Juniorzy";
const midLabel = "Regular";
const seniorLabel = "Seniorzy";
const otherLabel = "Pozostałe";

const { data: stats } = useGetDailyPositionsStats();

const chartData = computed(
  () =>
    stats?.value?.map(stat => ({
      name: dayjs(stat.createdAt).format(DATE_FORMAT_WITH_HOURS),
      [juniorLabel]: stat.juniorOffers,
      [midLabel]: stat.midOffers,
      [seniorLabel]: stat.seniorOffers,
      [otherLabel]: stat.otherOffers,
    })) ?? [],
);
</script>

<template>
  <StatsTitleWrapper title="Według pozycji">
    <LineChart
      class="charts"
      :data="chartData"
      index="name"
      :colors="['var(--primary)', 'gold', 'orange', 'red']"
      :categories="[juniorLabel, midLabel, seniorLabel, otherLabel]"
    />
  </StatsTitleWrapper>
</template>
