<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
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
    <component v-if="Boolean(props.icon)" :is="props.icon" class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

    <input
      :placeholder="props.placeholder"
      v-model="modelValue"
      :class="
        cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          { 'pl-8': Boolean(icon) },
          props.class,
        )
      "
    />
  </div>
</template>
