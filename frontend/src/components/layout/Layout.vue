<script setup lang="ts">
import Header from "@/components/layout/header/Header.vue";
import { HEADER_HEIGHT } from "@/constants";
</script>

<template>
  <Header />
  <main class="container bg-amber-400" :style="{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }">
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
