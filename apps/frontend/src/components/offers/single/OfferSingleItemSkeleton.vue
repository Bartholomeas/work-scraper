<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card class="flex flex-col gap-2 p-3 transition-shadow transition-transform hover:z-30 hover:translate-y-[-2px] hover:shadow-xl">
    <div class="flex flex-col justify-between self-stretch md:flex-row">
      <div class="flex gap-2 self-stretch">
        <Skeleton class="h-[96px] w-[96px] rounded-md" />
        <div class="flex flex-col">
          <Skeleton class="mb-2 h-6 w-[150px]" />
          <Skeleton class="mb-1 h-4 w-[100px]" />
          <Skeleton class="mb-1 h-4 w-[80px]" />
          <Skeleton class="h-4 w-[60px]" />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-2 max-md:mt-2 md:items-end">
        <div class="flex flex-row-reverse flex-nowrap items-end justify-between gap-2 md:flex-col">
          <Skeleton class="h-6 w-[120px]" />
          <div class="flex flex-col gap-1 md:flex-row">
            <Skeleton class="h-[22px] w-[120px] rounded-md md:w-[96px]" />
            <Skeleton class="h-[22px] w-[120px] rounded-md" />
            <Skeleton class="h-[22px] w-[120px] rounded-md md:w-[80px]" />
          </div>
        </div>
        <div class="flex grow items-center gap-2 self-end max-md:w-full">
          <Skeleton class="h-[40px] w-[40%] rounded-md" />
          <Skeleton class="h-[40px] w-[60%] rounded-md" />
        </div>
      </div>
    </div>
  </Card>
</template>
