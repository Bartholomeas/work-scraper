<script setup lang="ts">
import Header from "@/components/layout/header/Header.vue";
import { HEADER_HEIGHT } from "@/constants";
</script>

<template>
  <Header />
  <main class="container" :style="{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }">
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
