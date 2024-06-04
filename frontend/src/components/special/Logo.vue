<script setup lang="ts">
import { routeUrls } from "@/router/routes";
import NavLink from "@/components/common/NavLink.vue";
import { Package } from "lucide-vue-next";
</script>

<template>
  <NavLink :to="routeUrls.index" class="flex items-center gap-2 font-bold">
    <Package class="h-6 w-6" />
    <span> APK </span>
  </NavLink>
</template>
