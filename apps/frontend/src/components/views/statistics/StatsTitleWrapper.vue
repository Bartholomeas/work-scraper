<script setup lang="ts">
import Title from "@/components/common/title/Title.vue";

interface StatsTitleWrapper {
  title: string;
}

const props = defineProps<StatsTitleWrapper>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <Title size="h5" order="h2">{{ props.title }}</Title>
    <slot />
  </div>
</template>
