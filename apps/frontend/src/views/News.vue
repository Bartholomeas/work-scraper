<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { PAGE_NAME } from "@/constants";

import { useGetNews } from "@/api/news/getNews";
import { NewsResponse } from "shared/src/news/news.types";

import { onMounted, ref } from "vue";

import Title from "@/components/common/title/Title.vue";

const title = useTitle();
title.value = `Aktualności | ${PAGE_NAME}`;

const newsData = ref<NewsResponse>();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  newsData.value = await useGetNews();
  isLoading.value = false;
});
</script>

<template>
  <div class="bg-accent-card flex w-full flex-col gap-6">
    <Title order="h1" size="h1" class="font-bold">Aktualności</Title>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div
        class="bg-card text-card-foreground flex w-full flex-col gap-6 rounded-xl border p-2 shadow"
        v-for="newsItem in newsData"
        :key="newsItem.id"
      >
        <div>
          <p>{{ newsItem.title }}</p>
          <p>{{ newsItem.date }}</p>
          <p>{{ newsItem.shortDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
