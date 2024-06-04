<script setup lang="ts">
import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "vue";

interface Props {
  to: string;
  class?: HTMLAttributes["class"];
}

const { to, class: _class } = withDefaults(defineProps<Props>(), {
  to: "#",
});
</script>

<template>
  <RouterLink :to="to" :class="cn('text-muted-foreground transition-colors hover:text-foreground', _class)" active-class="!text-foreground">
    <slot />
  </RouterLink>
</template>

<style scoped></style>
