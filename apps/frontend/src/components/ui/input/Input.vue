<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { cn } from "@/utils/utils";
import type { InputProps } from "@/components/ui/input/index";

const props = defineProps<InputProps>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <div class="relative">
    <component
      v-if="Boolean(props.icon)"
      :is="props.icon"
      class="text-muted-foreground absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2"
    />

    <input
      :placeholder="props.placeholder"
      v-model="modelValue"
      :class="
        cn(
          'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-12 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
          { 'pl-8': Boolean(icon) },
          props.class,
        )
      "
    />
  </div>
</template>
