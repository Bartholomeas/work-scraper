<script setup lang="ts">
import { useTitle } from "@vueuse/core";

import { HEADER_HEIGHT, PAGE_NAME } from "@/constants";

import Header from "@/components/layout/header/Header.vue";
import Footer from "@/components/layout/Footer.vue";

const title = useTitle();
title.value = `Oferty pracy z IT | ${PAGE_NAME}`;
</script>

<template>
  <Header />
  <!-- +64 + 48 in calc is for Footer height (+/-)  -->
  <main class="container py-4" :style="{ minHeight: `calc(100dvh - ${HEADER_HEIGHT + 64 + 48}px)` }">
    <RouterView></RouterView>
  </main>
  <Footer />
</template>
