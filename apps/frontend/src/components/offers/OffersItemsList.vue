<script setup lang="ts">
import OffersSingleItem from "@/components/offers/single/OffersSingleItem.vue";
import type { JobOffersResponse } from "shared/src/offers/offers.types";
import OfferSingleItemSkeleton from "@/components/offers/single/OfferSingleItemSkeleton.vue";

interface OffersItemsListProps {
  offers: JobOffersResponse["data"] | undefined;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<OffersItemsListProps>(), {
  isLoading: false,
});
</script>

<template>
  <TransitionGroup appear name="list" tag="div" class="flex w-full flex-col gap-2">
    <OfferSingleItemSkeleton key="offerSingleItemSkeleton2" />
    <OfferSingleItemSkeleton key="offerSingleItem-skeleton" v-if="isLoading" />
    <OffersSingleItem
      v-for="(offer, index) in props.offers"
      v-else-if="Array.isArray(props.offers) && props.offers?.length > 0"
      :key="offer.id"
      :offer="offer"
      :data-index="index"
      :style="{ '--index': index }"
    />
    <div key="offerSingleItem-loader" v-else>Brak ofert</div>
  </TransitionGroup>
</template>

<style scoped>
.list-move,
.list-enter-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.list-leave-active {
  transition:
    transform 0.2s ease-out,
    opacity 0.2s ease-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
</style>
