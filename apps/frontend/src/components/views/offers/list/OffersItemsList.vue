<script setup lang="ts">
import { computed } from "vue";

import type { JobOffersResponse } from "shared/src/offers/offers.types";

import OffersSingleItem from "@/components/views/offers/single/OffersSingleItem.vue";
import OfferSingleItemSkeleton from "@/components/views/offers/single/OfferSingleItemSkeleton.vue";
import NoResultsCard from "@/components/common/NoResultsCard.vue";

interface OffersItemsListProps {
  offers: JobOffersResponse["data"] | undefined;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<OffersItemsListProps>(), {
  isLoading: false,
});

const skeletonArray = computed(() => Array.from({ length: 48 }));
</script>

<template>
  <TransitionGroup appear name="list" tag="div" class="flex w-full flex-col gap-2">
    <OfferSingleItemSkeleton v-if="isLoading" v-for="(_, index) in skeletonArray" :key="`offerSingleItem-skeleton-${index}`" />
    <OffersSingleItem
      v-for="(offer, index) in props.offers"
      v-else-if="Array.isArray(props.offers) && props.offers?.length > 0"
      :key="offer.id"
      :offer="offer"
      :data-index="index"
      :style="{ '--index': index }"
    />
    <NoResultsCard v-else key="offerSingleItem-empty" text="Brak wyników..." />
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
