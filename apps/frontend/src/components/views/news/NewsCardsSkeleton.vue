<script setup lang="ts">
import NewsCardSkeleton from "./NewsCardSkeleton.vue";
</script>

<template>
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <NewsCardSkeleton :itemsCount="6" />
  </div>
</template>
