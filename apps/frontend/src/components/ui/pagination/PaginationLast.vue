<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationLast, type PaginationLastProps } from "radix-vue";
import { DoubleArrowRightIcon } from "@radix-icons/vue";
import { Button } from "@/components/ui/button/Button.variants";
import { cn } from "@/utils/utils";

const props = withDefaults(defineProps<PaginationLastProps & { class?: HTMLAttributes["class"] }>(), {
  asChild: true,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationLast v-bind="delegatedProps">
    <Button :class="cn('h-9 w-9 p-0', props.class)" variant="outline">
      <slot>
        <DoubleArrowRightIcon />
      </slot>
    </Button>
  </PaginationLast>
</template>
