<script setup lang="ts">
import { computed } from "vue";
import OfferSingleItemSkeleton from "@/components/views/offers/single/OfferSingleItemSkeleton.vue";

const skeletonArray = computed(() => Array.from({ length: 48 }));
</script>

<template>
  <TransitionGroup appear name="list" tag="div" class="flex w-full flex-col gap-2">
    <OfferSingleItemSkeleton v-for="(_, index) in skeletonArray" :key="`offerSingleItem-skeleton-${index}`" />
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
