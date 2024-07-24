<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { HEADER_HEIGHT } from "@/constants";
import Header from "@/components/layout/header/Header.vue";

const title = useTitle();
title.value = "Oferty z IT | Scrappie";
</script>

<template>
  <Header />
  <main class="container py-4" :style="{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }">
    <RouterView></RouterView>
  </main>
</template>
