<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/utils/utils";
import { type TitleVariants, titleVariants } from "@/components/common/title/Title.variants";

interface TitleProps {
  size?: TitleVariants["size"];
  align?: TitleVariants["align"];
  weight?: TitleVariants["weight"];
  order?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<TitleProps>(), {
  order: "h2",
});

const variantProps = computed(() => {
  const { className, order, ...rest } = props;

  return { ...rest, size: rest.size ?? props.order };
});
</script>

<template>
  <component :is="props.order" :class="cn(titleVariants(variantProps), props.className)">
    <slot />
  </component>
</template>
