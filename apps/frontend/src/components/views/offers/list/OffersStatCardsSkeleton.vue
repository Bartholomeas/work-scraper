<script setup lang="ts">
import OffersStatCardSkeleton from "./offers-stat-card/OffersStatCardSkeleton.vue";
</script>

<template>
  <section class="grid grid-cols-1 gap-2 sm:grid-cols-3">
    <OffersStatCardSkeleton className="grid-cols-1" :items-count="5" />
    <div class="col-span-2 flex flex-col gap-2">
      <OffersStatCardSkeleton />
      <OffersStatCardSkeleton />
    </div>
  </section>
</template>
