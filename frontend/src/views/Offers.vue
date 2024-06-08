<script setup lang="ts">
import OffersFiltersContainer from "@/components/offers/filters/OffersFiltersContainer.vue";
import OffersItemsTable from "@/components/offers/OffersItemsList.vue";
import OffersStatCards from "@/components/offers/OffersStatCards.vue";
</script>

<template>
  <div class="flex flex-col gap-6 bg-accent-card">
    <h1 class="text-[40px] font-bold">Oferty pracy</h1>
    <OffersStatCards />
    <OffersFiltersContainer />
    <OffersItemsTable />
  </div>
</template>

<style scoped></style>
