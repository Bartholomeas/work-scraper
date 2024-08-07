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
        <FormLabel :for="name" class="text-md font-bold">{{ label }}</FormLabel>
        <FormDescription v-if="description">{{ description }}</FormDescription>
      </div>

      <div class="mb-2 flex flex-col gap-2 pl-3" role="group">
        <FormField
          :name="name"
          v-if="Array.isArray(items) && items.length > 0"
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          type="checkbox"
          :value="item.value"
          :unchecked-value="false"
          :aria-labelledby="name"
        >
          <FormItem class="flex items-center gap-2">
            <FormControl>
              <Checkbox
                :id="`${name}-${item.label}`"
                :checked="value?.includes(item.value)"
                @update:checked="handleChange"
                :aria-label="item.label"
                :aria-labelledby="`label-${name}-${item.label}`"
                role="button"
              />
            </FormControl>
            <FormLabel :id="`label-${name}-${item.label}`" :for="`${name}-${item.label}`" class="!mt-0">
              {{ item.label }}
            </FormLabel>
          </FormItem>
        </FormField>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
