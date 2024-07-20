<script setup lang="ts">
import { useGetGeneralStatistics } from "@/api/statistics/getGeneralStatistics";

import OffersStatCard from "@/components/offers/OffersStatCard.vue";
import { BarChart, Building2, Cpu } from "lucide-vue-next";

const { data: stats } = useGetGeneralStatistics();
// const { data: stats } = useGetOffersMetadata();
</script>

<template>
  <section class="grid grid-cols-1 gap-2 sm:grid-cols-3">
    <OffersStatCard
      :key="`offerStatCard-${stats?.id}`"
      title="Wszystkich ofert"
      :value="stats?.totalOffers.toString() ?? '0'"
      description="Ofert łącznie"
      :icon="BarChart"
    />
    <OffersStatCard
      :key="`offerStatCard-${stats?.id}`"
      title="Najwięcej ofert"
      value="tt"
      description="W tych miastach nie trudno o oferty!"
      :icon="Building2"
    />
    <OffersStatCard
      :key="`offerStatCard-${stats?.id}`"
      title="Najczęstsze technologie"
      :value="'sss'"
      description="Te technologie są najbardziej pożądane"
      :icon="Cpu"
    />
  </section>
</template>
