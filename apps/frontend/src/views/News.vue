<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";

import { useGetNews } from "@/api/news/getNews";

import Title from "@/components/common/title/Title.vue";

import NewsCard from "@/components/views/news/NewsCard.vue";
import NewsCardsSkeleton from "@/components/views/news/NewsCardSkeleton.vue";

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
    <div class="grid gap-6 md:grid-cols-2" v-else>
      <TransitionGroup name="card">
        <NewsCard v-for="newsItem in newsItems" :key="newsItem.id" :newsItem="newsItem" />
      </TransitionGroup>
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
