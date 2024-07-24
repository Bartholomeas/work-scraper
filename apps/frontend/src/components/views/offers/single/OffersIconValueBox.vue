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
  <div class="flex items-center gap-2" v-if="value">
    <component :is="icon" class="text-muted-foreground aspect-square h-4 w-4 min-w-4" />
    <p v-if="title" class="text-muted-foreground text-left text-sm">{{ title }}</p>
    <p :class="cn('text-muted-foreground text-left text-sm capitalize', valueClass)">{{ value }}</p>
  </div>
</template>
