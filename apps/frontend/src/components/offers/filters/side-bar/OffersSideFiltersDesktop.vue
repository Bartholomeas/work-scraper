<script setup lang="ts">
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card class="lg:w-1/4 lg:mt-2 sticky top-20 h-fit p-4 flex flex-col gap-2">
    <p class="font-bold text-lg">Filtry</p>
    <slot />
  </Card>
</template>
