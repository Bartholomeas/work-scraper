<script setup lang="ts">
import { useField } from "vee-validate";

import { Input, InputProps } from "@/components/ui/input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";

const { name, label, description, labelSrOnly, ...props } = withDefaults(
  defineProps<
    InputProps & {
      name: string;
      label: string;
      description?: string;
      placeholder?: string;
      labelSrOnly?: boolean;
    }
  >(),
  {
    labelSrOnly: false,
  },
);
const { meta } = useField(name);
</script>

<template>
  <FormField :name="name" v-slot="{ componentField }" :validate-on-blur="!meta.dirty">
    <FormItem>
      <FormLabel :class="{ 'sr-only': labelSrOnly }">{{ label }}</FormLabel>
      <FormControl>
        <Input v-bind="{ ...componentField, ...props }" />
      </FormControl>
      <FormDescription v-if="Boolean(description)">{{ description }}</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
