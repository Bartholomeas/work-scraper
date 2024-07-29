<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/utils/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CheckboxControlledSkeletonProps {
  numberOfItems?: number;
}

const props = withDefaults(defineProps<CheckboxControlledSkeletonProps>(), {
  numberOfItems: 1,
});

const possibleWidths: HTMLAttributes["class"] = ["w-8", "w-10", "w-12", "w-14", "w-16", "", "w-20", "w-24", "w-28", "w-32"];

const skeletonItemsArray = computed(() =>
  new Array(props.numberOfItems).fill(null).map((_, index) => ({
    id: `checkboxControlledSkeletonItem-${index}`,
    width: possibleWidths[Math.floor(Math.random() * possibleWidths.length) ?? 0],
  })),
);
</script>

<template>
  <div>
    <div class="mb-3 flex gap-1">
      <Skeleton class="h-4 w-12" />
      <Skeleton class="h-4 w-32" />
    </div>

    <div class="mb-2 flex flex-col gap-2 pl-3">
      <div class="flex items-center gap-2" v-for="item in skeletonItemsArray" :key="item?.id">
        <Skeleton class="h-4 w-4 rounded" />
        <Skeleton :class="cn('h-4', item?.width)" />
      </div>
    </div>
  </div>
</template>
