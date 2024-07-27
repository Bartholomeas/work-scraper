<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import Title from "@/components/common/title/Title.vue";
import { cn } from "@/utils/utils";

interface PoliticsContentWrapperProps {
  title: string;
  order?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const props = withDefaults(defineProps<PoliticsContentWrapperProps>(), {
  order: "h2",
});
</script>

<template>
  <div :class="cn('mt-12 flex flex-col gap-2', props.className)">
    <Title :order="props.order">{{ props.title }} </Title>
    <Separator />
    <slot />
  </div>
</template>
