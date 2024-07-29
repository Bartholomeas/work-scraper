<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/utils/utils";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const possibleBarHeights: HTMLAttributes["class"] = ["h-3/4", "h-1/2", "h-2/3", "h-1/4", "h-1/3", "h-2/5", "h-4/6"];

const skeletonBarsArray = computed(() =>
  new Array(12).fill(null).map((_, index) => ({
    id: `chartBarSkeleton-${index}`,
    height: possibleBarHeights[Math.floor(Math.random() * possibleBarHeights.length) ?? 0],
  })),
);
</script>

<template>
  <div class="flex flex-col gap-2">
    <Skeleton class="h-6 w-64" />
    <Card class="grid h-[372px] w-full grid-cols-12 items-end gap-2 overflow-hidden">
      <Skeleton v-for="skeleton in skeletonBarsArray" :key="skeleton?.id" :class="cn('w-full', skeleton.height)" />
    </Card>
  </div>
</template>
