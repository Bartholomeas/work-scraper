<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
</script>

<template>
  <Card class="flex flex-col gap-2 p-3">
    <div class="flex flex-col justify-between self-stretch md:flex-row">
      <div class="flex gap-2 self-stretch">
        <!--        <Skeleton class="h-[96px] w-[96px] rounded-md" />-->
        <div class="flex flex-col gap-1">
          <Skeleton class="mb-2 h-6 w-[150px]" />
          <Skeleton class="mb-1 h-3 w-[100px]" />
          <Skeleton class="mb-1 h-3 w-[80px]" />
          <Skeleton class="mb-1 h-3 w-[80px]" />
          <Skeleton class="mb-1 h-3 w-[80px]" />
          <Skeleton class="h-3 w-[60px]" />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-2 max-md:mt-2 md:items-end">
        <div class="flex flex-row-reverse flex-nowrap items-end justify-between gap-2 md:flex-col">
          <div class="flex flex-row flex-wrap justify-end gap-1 md:justify-start">
            <Skeleton class="h-[22px] w-[120px] rounded-md md:w-[64px]" />
            <Skeleton class="h-[22px] w-[120px] rounded-md md:w-[70px]" />
            <Skeleton class="h-[22px] w-[120px] rounded-md md:w-[80px]" />
          </div>
        </div>
        <Skeleton class="h-6 w-[120px] self-end" />
        <div class="flex grow items-end gap-2 self-end max-md:w-full">
          <Skeleton class="h-[40px] w-[40%] rounded-md md:h-[36px] md:w-[120px]" />
          <Skeleton class="h-[40px] w-[60%] rounded-md md:h-[36px] md:w-[170px]" />
        </div>
      </div>
    </div>
  </Card>
</template>
