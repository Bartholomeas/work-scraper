<script setup lang="ts">
import OffersStatCard from "@/components/offers/OffersStatCard.vue";
import { useGetOffersMetadata } from "@/api/getOffersMetadata";
import { BarChart } from "lucide-vue-next";

// const statistics = [
//   {
//     title: "Nowych ofert pracy",
//     value: "+214",
//     description: "Od wczoraj godziny 12:00",
//     icon: BarChart,
//   },
//   {
//     title: "Nowych ofert pracy",
//     value: "+214",
//     description: "Od wczoraj godziny 12:00",
//     icon: BarChart,
//   },
//   {
//     title: "Nowych ofert pracy",
//     value: "+214",
//     description: "Od wczoraj godziny 12:00",
//     icon: BarChart,
//   },
// ];

const { data: stats } = useGetOffersMetadata();
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-3 gap-2">
    <OffersStatCard
      :key="`offerStatCard-${stats?.id}`"
      title="Wszystkich ofert"
      :value="stats?.total ?? 0"
      :description="stats?.updatedAt"
      :icon="BarChart"
    />
  </section>
</template>
