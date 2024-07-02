<script setup lang="ts">
import { useField } from "vee-validate";

import { cn } from "@/utils/utils";

import { Input, InputProps } from "@/components/ui/input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";

interface InputControlledProps extends InputProps, ControlledProps {
  fullWidth?: boolean;
}

const { name, label, description, labelSrOnly, fullWidth, ...props } = withDefaults(defineProps<InputControlledProps>(), {
  labelSrOnly: false,
  fullWidth: false,
});
const { meta } = useField(name);
</script>

<template>
  <FormField :name="name" v-slot="{ componentField }" :validate-on-blur="!meta.dirty">
    <FormItem :class="cn({ 'w-full': fullWidth })">
      <FormLabel :class="{ 'sr-only': labelSrOnly }">{{ label }}</FormLabel>
      <FormControl>
        <Input v-bind="{ ...componentField, ...props }" />
      </FormControl>
      <FormDescription v-if="Boolean(description)">{{ description }}</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
