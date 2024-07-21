<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Title from "@/components/common/title/Title.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Title order="h3" size="h2" weight="bold" :class-name="props.class">
    <slot />
  </Title>
</template>
