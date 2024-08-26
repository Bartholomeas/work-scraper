<script setup lang="ts">
import type { CheckboxRootProps } from "radix-vue";

import { Checkbox } from "@/components/ui/checkbox";
import type { CheckboxItem, ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";

interface CheckboxControlledProps extends Omit<CheckboxRootProps, "name">, ControlledProps {
  items: CheckboxItem[];
}

const { name, label, description, items } = defineProps<CheckboxControlledProps>();
</script>

<template>
  <FormField v-if="name && items?.length > 0" :name="name">
    <FormItem>
      <div class="mb-2 flex flex-col gap-1">
        <FormLabel class="text-md font-bold">{{ label }}</FormLabel>
        <FormDescription v-if="description">{{ description }}</FormDescription>
      </div>

      <div class="mb-2 flex flex-col gap-2 pl-3">
        <FormField
          :name="name"
          v-if="Array.isArray(items) && items.length > 0"
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          :value="item.value"
          :unchecked-value="false"
          type="checkbox"
        >
          <FormItem class="flex items-center gap-2">
            <FormControl>
              <Checkbox :checked="value?.includes(item.value)" :aria-label="item.label" @update:checked="handleChange" />
            </FormControl>
            <FormLabel class="!mt-0 cursor-pointer">
              {{ item.label }}
            </FormLabel>
          </FormItem>
        </FormField>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
