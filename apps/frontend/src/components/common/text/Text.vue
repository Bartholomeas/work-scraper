<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { textVariants, type TextVariants } from "@/components/common/text/Text.variants";
import { cn } from "@/utils/utils";

interface TextProps {
  size?: TextVariants["size"];
  align?: TextVariants["align"];
  weight?: TextVariants["weight"];
  as?: "p" | "span";
  className?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<TextProps>(), {
  as: "p",
});

const variantProps = computed(() => {
  const { className, as, ...rest } = props;
  return rest;
});
</script>

<template>
  <component :is="props.as" :class="cn(textVariants(variantProps), props.className)">
    <slot />
  </component>
</template>
