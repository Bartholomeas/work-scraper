<script setup lang="ts">
import { routeUrls } from "@/router/routes";
import { Package } from "lucide-vue-next";
</script>

<template>
  <RouterLink :to="routeUrls.index" class="text-foreground flex items-center gap-2 font-bold">
    <Package class="h-6 w-6" />
    <span> Scrappie </span>
  </RouterLink>
</template>
