<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils/utils";

interface SkeletonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div :class="cn('bg-background-lighter animate-pulse rounded-md', props.class)" />
</template>
