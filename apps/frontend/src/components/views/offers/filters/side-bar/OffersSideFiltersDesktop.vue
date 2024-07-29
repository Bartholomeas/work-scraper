<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { HEADER_HEIGHT } from "@/constants";
</script>

<template>
  <Card
    class="sticky top-20 flex h-fit flex-col gap-2 p-4 pb-2 pr-2 lg:mt-2 lg:w-1/4"
    :style="{
      maxHeight: `calc(100dvh - ${HEADER_HEIGHT + 32}px)`,
    }"
  >
    <p class="text-lg font-bold">Filtry</p>
    <slot />
  </Card>
</template>
