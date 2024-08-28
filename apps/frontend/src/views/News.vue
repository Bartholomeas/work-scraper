<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";

import { useGetNews } from "@/api/news/getNews";

import Title from "@/components/common/title/Title.vue";

import NewsCard from "@/components/views/news/single/NewsCard.vue";
import NewsCardsSkeleton from "@/components/views/news/single/NewsCardsSkeleton.vue";
import NoResultsCard from "@/components/common/NoResultsCard.vue";

const title = useTitle();
title.value = `Aktualności | ${PAGE_NAME}`;

const { data: newsItems, isLoading } = useGetNews();
</script>

<template>
  <div class="bg-accent-card flex w-full flex-col gap-6">
    <Title order="h1" size="h1" class="font-bold">Aktualności</Title>
    <div v-if="isLoading">
      <NewsCardsSkeleton />
    </div>
    <div class="grid gap-6 md:grid-cols-2" v-else-if="!isLoading && newsItems">
      <TransitionGroup name="card">
        <NewsCard v-for="newsItem in newsItems" :key="newsItem.id" :newsItem="newsItem" />
      </TransitionGroup>
    </div>
    <div v-else class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <NoResultsCard text="Brak aktualności..." />
    </div>
  </div>
</template>

<style scoped>
.card-move,
.card-enter-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.card-leave-active {
  transition:
    transform 0.2s ease-out,
    opacity 0.2s ease-out;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
