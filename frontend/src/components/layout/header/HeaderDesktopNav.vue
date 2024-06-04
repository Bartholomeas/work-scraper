<script setup lang="ts">
import NavLink from "@/components/common/NavLink.vue";
import HeaderToggleTheme from "@/components/layout/header/HeaderToggleTheme.vue";
import { HEADER_LINKS } from "@/components/layout/header/header.constants";
import Logo from "@/components/special/Logo.vue";
</script>

<template>
  <nav
    class="container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-4 md:text-sm xl:px-0"
  >
    <ul class="hidden gap-6 md:flex md:flex-row md:items-center md:gap-4">
      <li>
        <Logo />
      </li>
      <li v-for="link in HEADER_LINKS" :key="`navLink-${link.label.toLowerCase().split(' ').join('-')}-${link.to}`">
        <NavLink :to="link.to">
          {{ link.label }}
        </NavLink>
      </li>
    </ul>
    <HeaderToggleTheme />
  </nav>
</template>
