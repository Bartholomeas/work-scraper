<script setup lang="ts">
import type { SelectItemProps, SelectRootProps } from "radix-vue";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useField } from "vee-validate";

export interface SelectControlledItem extends SelectItemProps {
  content: string;
}

interface SelectControlledProps extends ControlledProps, Omit<SelectRootProps, "name"> {
  items: SelectControlledItem[];
}

const { name, label, labelSrOnly, placeholder, description, items, className, ...props } = withDefaults(
  defineProps<SelectControlledProps>(),
  {
    placeholder: "Wybierz wartość",
  },
);

const { meta } = useField(name);
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name" :validate-on-blur="!meta.dirty">
    <FormItem>
      <FormLabel :class="{ 'sr-only': labelSrOnly }">{{ label }}</FormLabel>
      <Select v-bind="componentField">
        <FormControl>
          <SelectTrigger :class="className">
            <SelectValue :placeholder="placeholder" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="{ content, ...rest } in items" :key="`selectItem-${rest.textValue}-${rest.value}`" v-bind="rest">
              {{ content }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormDescription v-if="Boolean(description)">{{ description }}</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
