<script setup lang="ts">
import { type HTMLAttributes, provide } from "vue";
import { useId } from "radix-vue";

import { cn } from "@/lib/utils";
import { FORM_ITEM_INJECTION_KEY } from "@/components/common/form";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const id = useId();
provide(FORM_ITEM_INJECTION_KEY, id);
</script>

<template>
  <div :class="cn('space-y-2', props.class)">
    <slot />
  </div>
</template>
