<script setup lang="ts">
import { FormField, FormItem, FormLabel } from "@/components/common/form";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";
import { cn } from "@/utils/utils";

interface ComboboxControlledProps extends ControlledProps {}

const props = defineProps<ComboboxControlledProps>();
</script>

<template>
  <FormField :name="props.name">
    <FormItem class="flex flex-col">
      <FormLabel :class="cn({ 'sr-only': props.labelSrOnly })">
        {{ props.label }}
      </FormLabel>

      <Popover></Popover>
    </FormItem>
  </FormField>
</template>
