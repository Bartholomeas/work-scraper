<script setup lang="ts">
import HeaderDesktopNav from "@/components/layout/header/HeaderDesktopNav.vue";
import HeaderMobileNav from "@/components/layout/header/HeaderMobileNav.vue";
</script>

<template>
  <header class="sticky top-0 flex gap-4 h-16 items-center border-b bg-background max-md:px-2">
    <HeaderMobileNav />
    <HeaderDesktopNav />
  </header>
</template>
