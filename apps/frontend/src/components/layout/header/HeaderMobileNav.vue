<script setup lang="ts">
import NavLink from "@/components/common/NavLink.vue";
import HeaderToggleTheme from "@/components/layout/header/HeaderToggleTheme.vue";
import Logo from "@/components/special/Logo.vue";

import { HEADER_LINKS } from "@/components/layout/header/header.constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-vue-next";
</script>

<template>
  <div class="flex items-center w-full justify-between shrink-0 md:hidden">
    <Logo />
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon">
          <Menu class="h-6 w-6" />
          <span class="sr-only">Otwórz lub zamknij nawigację</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="w-[85vw]">
        <nav>
          <ul class="grid gap-6 text-lg font-medium">
            <li>
              <Logo />
            </li>
            <li v-for="link in HEADER_LINKS" :key="`navLink-${link.label.toLowerCase().split(' ').join('-')}-${link.to}`">
              <NavLink :to="link.to">
                {{ link.label }}
              </NavLink>
            </li>
            <li>
              <HeaderToggleTheme />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
</template>
