<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Title from "@/components/common/title/Title.vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Title order="h3" :class-name="props.class">
    <slot />
  </Title>
</template>
