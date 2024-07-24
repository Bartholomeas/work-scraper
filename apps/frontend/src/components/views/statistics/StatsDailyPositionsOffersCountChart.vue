<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { DATE_FORMAT_WITH_HOURS } from "@/constants";
import { useGetDailyPositionsOffersCount } from "@/api/statistics/getDailyPositionsOffersCount";
import { AreaChart } from "@/components/ui/chart-area";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";

const juniorLabel = "Juniorzy";
const midLabel = "Regular";
const seniorLabel = "Seniorzy";
const otherLabel = "Pozostałe";

const { data: stats } = useGetDailyPositionsOffersCount();
console.log(stats?.value?.[0]);
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
    <AreaChart
      class="charts"
      :data="chartData"
      index="name"
      :colors="['var(--primary)', 'yellow', 'orange', 'red']"
      :categories="[juniorLabel, midLabel, seniorLabel, otherLabel]"
    />
  </StatsTitleWrapper>
</template>
