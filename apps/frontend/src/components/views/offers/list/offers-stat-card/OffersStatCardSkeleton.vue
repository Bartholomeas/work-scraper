<script setup lang="ts">
import { HTMLAttributes } from "vue";

import { cn } from "@/utils/utils";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface OffersStatCardSkeletonProps {
  itemsCount?: number;
  className?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<OffersStatCardSkeletonProps>(), {
  itemsCount: 8,
});
</script>

<template>
  <Card>
    <CardHeader class="mb-4 flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
      <Skeleton class="h-4 w-64" />
      <Skeleton class="h-4 w-6" />
    </CardHeader>
    <CardContent>
      <div :class="cn('grid w-full grid-cols-2 gap-2 gap-x-6', props.className)">
        <div
          v-for="(_, index) in new Array(props.itemsCount).fill(null)"
          :key="`OffersStatCardSkeletonEl-${index}`"
          class="flex w-full items-center justify-between gap-2"
        >
          <Skeleton class="h-3 w-16" />
          <Skeleton class="h-3 w-8" />
        </div>
      </div>
      <Skeleton class="mt-2 h-3 w-32" />
    </CardContent>
  </Card>
</template>
