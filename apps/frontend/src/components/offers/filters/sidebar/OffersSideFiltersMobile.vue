<script setup lang="ts">
import { HEADER_HEIGHT } from "@/constants";
import { MixerVerticalIcon } from "@radix-icons/vue";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button size="icon" aria-label="Pokaż panel z głównymi filtrami" class="fixed left-4 bottom-4 z-50">
        <MixerVerticalIcon class="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="w-[85vw]" :style="{ paddingTop: `${HEADER_HEIGHT + 16}px` }">
      <SheetTitle>Filtruj oferty</SheetTitle>
      <slot />
    </SheetContent>
  </Sheet>
</template>
