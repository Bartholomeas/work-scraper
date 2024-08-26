<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";

import { useGetNews } from "@/api/news/getNews";

import Title from "@/components/common/title/Title.vue";

import NewsCard from "@/components/views/news/NewsCard.vue";

const title = useTitle();
title.value = `Aktualności | ${PAGE_NAME}`;

const { data: newsItems } = useGetNews();
</script>

<template>
  <div class="bg-accent-card flex w-full flex-col gap-6">
    <Title order="h1" size="h1" class="font-bold">Aktualności</Title>
    <Suspense>
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        <NewsCard v-for="newsItem in newsItems" :key="newsItem.id" :newsItem="newsItem" />
      </div>
      <template #fallback>
        <p>test</p>
      </template>
    </Suspense>
  </div>
</template>
