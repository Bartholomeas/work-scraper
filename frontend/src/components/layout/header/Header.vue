<script setup lang="ts">
import { routeUrls } from "@/router/routes";
import { Package } from "lucide-vue-next";

import NavLink from "@/components/common/NavLink.vue";
import HeaderToggleTheme from "@/components/layout/header/HeaderToggleTheme.vue";
</script>

<template>
  <header class="sticky top-0 flex gap-4 h-16 items-center border-b bg-background">
    <nav
      class="container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-4 md:text-sm"
    >
      <ul class="hidden gap-6 md:flex md:flex-row md:items-center md:gap-4">
        <li>
          <NavLink :to="routeUrls.index" class="flex items-center gap-2 font-bold">
            <Package class="h-6 w-6" />
          </NavLink>
        </li>
        <li>
          <NavLink :to="routeUrls.index">Strona główna</NavLink>
        </li>
        <li>
          <NavLink :to="routeUrls.statistics">Statystyki</NavLink>
        </li>
      </ul>
      <HeaderToggleTheme />
    </nav>
  </header>
</template>

<style scoped></style>
