<script setup lang="ts">
import { cn } from "@/utils/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface NewsCardSkeletonProps {
  itemsCount?: number;
}

const props = withDefaults(defineProps<NewsCardSkeletonProps>(), {
  itemsCount: 6,
});
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <Card
      v-for="(_, index) in new Array(props.itemsCount).fill(null)"
      :key="`NewsCardSkeletonEl-${index}`"
      class="flex w-full flex-col gap-2"
    >
      <CardContent class="h-36 space-y-4 p-4" :class="cn('bg-background-lighter animate-pulse rounded-md')">
        <Skeleton class="bg-card h-4 w-1/4" />
        <Skeleton class="bg-card h-6 w-2/3" />
        <Skeleton class="bg-card h-8 w-3/4" />
      </CardContent>
    </Card>
  </div>
</template>
