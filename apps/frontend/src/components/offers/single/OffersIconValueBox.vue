<script setup lang="ts">
import { cn } from "@/utils/utils";
import type { HTMLAttributes } from "vue";
import type { LucideIcon } from "lucide-vue-next";

interface OffersIconValueBox {
  value: string | undefined;
  icon: LucideIcon;
  title?: string;
  valueClass?: HTMLAttributes["class"];
}

const { value, icon, title, valueClass } = defineProps<OffersIconValueBox>();
</script>

<template>
  <div class="flex gap-2 items-center" v-if="value">
    <component :is="icon" class="h-4 w-4 min-w-4 aspect-square text-muted-foreground" />
    <p v-if="title" class="text-left text-muted-foreground text-sm">{{ title }}</p>
    <p :class="cn('text-left text-muted-foreground text-sm capitalize', valueClass)">{{ value }}</p>
  </div>
</template>
