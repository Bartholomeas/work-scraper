<script setup lang="ts">
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card class="sticky top-20 flex h-fit flex-col gap-2 p-4 lg:mt-2 lg:w-1/4">
    <p class="text-lg font-bold">Filtry</p>
    <slot />
  </Card>
</template>
