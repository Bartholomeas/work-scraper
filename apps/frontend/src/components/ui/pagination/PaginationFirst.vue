<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { PaginationFirst, type PaginationFirstProps } from "radix-vue";
import { DoubleArrowLeftIcon } from "@radix-icons/vue";

import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button/Button.variants";

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes["class"] }>(), {
  asChild: true,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
      <slot>
        <DoubleArrowLeftIcon />
      </slot>
    </Button>
  </PaginationFirst>
</template>
