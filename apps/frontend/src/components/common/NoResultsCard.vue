<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { FileIcon } from "@radix-icons/vue";

defineProps<{
  text: string;
}>();
</script>

<template>
  <Card class="shadow-background-lighter mx-auto flex min-h-24 w-fit flex-col items-center justify-center gap-2 p-[24px] shadow-md">
    <FileIcon class="text-muted-foreground/20 size-12" />
    <p class="text-muted-foreground/70 text-lg font-medium">{{ text }}</p>
  </Card>
</template>
