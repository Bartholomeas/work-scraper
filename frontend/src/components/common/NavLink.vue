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

const PSEUDOELEMENT_CLASS =
  "after:h-[2px] after:w-full after:bg-primary after:rounded after:-bottom-1 after:left-0 after:right-0 after:transition-transform after:duration-300 after:scale-x-0 after:origin-left";
</script>

<template>
  <RouterLink
    :to="to"
    :class="cn('text-muted-foreground transition-colors hover:text-foreground relative', PSEUDOELEMENT_CLASS, _class)"
    active-class="!text-foreground after:absolute after:scale-x-100"
  >
    <slot />
  </RouterLink>
</template>

<style scoped></style>
