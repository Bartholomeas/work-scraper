<script setup lang="ts">
import OffersSingleItem from "@/components/offers/single/OffersSingleItem.vue";
import type { JobOffersResponse } from "shared/src/offers/offers.types";

interface OffersItemsListProps {
  offers: JobOffersResponse["data"] | undefined;
}

const { offers } = defineProps<OffersItemsListProps>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <OffersSingleItem v-for="offer in offers" v-if="Array.isArray(offers) && offers?.length > 0" :key="offer.id" :offer="offer" />
    <div v-else>Brak ofert</div>
  </div>
</template>
