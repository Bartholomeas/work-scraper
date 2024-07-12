<script setup lang="ts">
import type { CheckboxRootProps } from "radix-vue";

import { Checkbox } from "@/components/ui/checkbox";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";

const items = [
  {
    id: "recents",
    label: "Recents",
    value: "recents",
  },
  {
    id: "home",
    label: "Home",
    value: "home",
  },
  {
    id: "applications",
    label: "Applications",
    value: "applications",
  },
  {
    id: "desktop",
    label: "Desktop",
    value: "desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
    value: "downloads",
  },
  {
    id: "documents",
    label: "Documents",
    value: "documents",
  },
] as const;

interface CheckboxControlledProps extends Omit<CheckboxRootProps, "name">, ControlledProps {}

const { name, label, description } = defineProps<CheckboxControlledProps>();
</script>

<template>
  <FormField :name="name">
    <FormItem>
      <div class="flex flex-col gap-1 mb-2">
        <FormLabel>{{ label }}</FormLabel>
        <FormDescription v-if="description">{{ description }}</FormDescription>
      </div>

      <div class="flex flex-col gap-2">
        <FormField
          :name="name"
          v-for="item in items"
          v-slot="{ value, handleChange }"
          :key="item.id"
          type="checkbox"
          :value="item.value"
          :unchecked-value="false"
        >
          <FormItem class="flex items-center gap-2">
            <FormControl>
              <Checkbox :checked="value?.includes(item.value)" @update:checked="handleChange" />
            </FormControl>
            <FormLabel class="!mt-0">
              {{ item.label }}
            </FormLabel>
          </FormItem>
        </FormField>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
