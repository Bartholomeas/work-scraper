<script setup lang="ts">
import OffersStatCard from "@/components/offers/OffersStatCard.vue";
import { BarChart } from "lucide-vue-next";

const statistics = [
  {
    title: "Nowych ofert pracy",
    value: "+214",
    description: "Od wczoraj godziny 12:00",
    icon: BarChart,
  },
  {
    title: "Nowych ofert pracy",
    value: "+214",
    description: "Od wczoraj godziny 12:00",
    icon: BarChart,
  },
  {
    title: "Nowych ofert pracy",
    value: "+214",
    description: "Od wczoraj godziny 12:00",
    icon: BarChart,
  },
];
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-3 gap-2">
    <OffersStatCard
      v-for="stat in statistics"
      :key="`offerStatCard-${stat.title}-${stat.description}`"
      :title="stat.title"
      :value="stat.value"
      :description="stat.description"
      :icon="stat.icon"
    />
  </section>
</template>
