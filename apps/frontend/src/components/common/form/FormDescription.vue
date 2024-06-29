<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useFormField } from "@/components/common/form/useFormField";
import { cn } from "@/utils/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
const { formDescriptionId } = useFormField();
</script>

<template>
  <p :id="formDescriptionId" :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
