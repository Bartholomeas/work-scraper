<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card class="flex flex-col p-3 gap-2 hover:translate-y-[-2px] transition-shadow transition-transform hover:z-30 hover:shadow-xl">
    <Skeleton class="h-[125px] w-[250px] rounded-xl" />
    <div class="space-y-2">
      <Skeleton class="h-4 w-[250px]" />
      <Skeleton class="h-4 w-[200px]" />
    </div>
  </Card>
</template>

<style scoped></style>
