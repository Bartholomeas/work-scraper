<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { SelectItemProps } from "radix-vue";

export interface SelectControlledItem extends SelectItemProps {
  content: string;
}

interface SelectControlledProps extends ControlledProps {
  items: SelectControlledItem[];
}

const { name, label, labelSrOnly, placeholder, description, items } = withDefaults(defineProps<SelectControlledProps>(), {
  placeholder: "Wybierz wartość",
});

console.log("Xdd", items);
</script>

<template>
  <FormField v-slot="{ componentField }" :name="name">
    <FormItem>
      <FormLabel :class="{ 'sr-only': labelSrOnly }">{{ label }}</FormLabel>
      <Select v-bind="componentField">
        <FormControl>
          <SelectTrigger>
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
