<script setup lang="ts">
import HeaderDesktopNav from "@/components/layout/header/HeaderDesktopNav.vue";
import HeaderMobileNav from "@/components/layout/header/HeaderMobileNav.vue";
</script>

<template>
  <header class="screen bg-background sticky left-0 right-0 top-0 z-[100] flex h-16 items-center gap-4 border-b max-md:px-2">
    <HeaderMobileNav />
    <HeaderDesktopNav />
  </header>
</template>
