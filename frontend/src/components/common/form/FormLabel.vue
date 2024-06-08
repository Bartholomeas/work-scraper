<script setup lang="ts">
import type { LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

import { useFormField } from "@/components/common/form/useFormField";
import { Label } from "@/components/ui/label";

const props = defineProps<
  LabelProps & {
    class?: HTMLAttributes["class"];
  }
>();

const { error, formItemId } = useFormField();
</script>

<template>
  <Label :class="cn(error && 'text-destructive', props.class)" :for="formItemId">
    <slot />
  </Label>
</template>
