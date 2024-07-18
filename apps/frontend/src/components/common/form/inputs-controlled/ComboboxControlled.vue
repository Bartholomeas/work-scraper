<script setup lang="ts">
import { computed, inject, ref } from "vue";

import { cn } from "@/utils/utils";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Button from "@/components/ui/button/Button.vue";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/common/form";
import type { ControlledProps } from "@/components/common/form/inputs-controlled/inputs-controlled.types";

import { CheckIcon } from "@radix-icons/vue";

interface CommandItem {
  id: string;
  label: string;
  value: string | number;
}

interface ComboboxControlledProps extends ControlledProps {
  commandPlaceholder?: string;
  items: CommandItem[];
}

const setFieldValue = inject<(name: string, value: unknown) => void>("setFieldValue");
const values = inject<Record<string, unknown>>("formValues");

if (!setFieldValue)
  throw new Error("ComboboxControlled should be used within provided setFieldValue from useForm (like in <FiltersWrapper/>)");
if (!values)
  throw new Error("ComboboxControlled should be used within provided formValues (values) from useForm (like in <FiltersWrapper/>)");

const searchQuery = ref("");

const filteredItems = computed<CommandItem[]>(() => {
  if (!searchQuery.value) return props.items?.slice(0, 15) ?? [];
  return props.items.filter(item => item && item.label && item.label.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const onCommandInput = (e: InputEvent) => {
  searchQuery.value = (e.target as HTMLInputElement)?.value;
};

const props = withDefaults(defineProps<ComboboxControlledProps>(), {
  commandPlaceholder: "Wyszukaj..",
});
</script>

<template>
  <FormField :name="props.name">
    <FormItem class="flex flex-col">
      <FormLabel :class="cn({ 'sr-only': props.labelSrOnly })">
        {{ props.label }}
      </FormLabel>

      <Popover>
        <PopoverTrigger as-child>
          <FormControl>
            <Button variant="outline" role="combobox" class="justify-start">
              {{
                props.items
                  ? props.items?.find(item => {
                      return item.value === values?.[name];
                    })?.label ?? props.label
                  : props.label
              }}
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent class="p-0 max-w-[220px]">
          <Command>
            <CommandInput @input="onCommandInput" :placeholder="props.commandPlaceholder" />
            <CommandEmpty>Nie znaleziono.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                <CommandItem
                  v-for="item in filteredItems"
                  :key="item.id ?? item.label"
                  :value="item.label"
                  @select="
                    () => {
                      setFieldValue(props.name, item.value);
                    }
                  "
                >
                  {{ item.label }}
                  <CheckIcon :class="cn('ml-auto h-4 w-4', item.value === values?.[name] ? 'opacity-1000' : 'opacity-0')" />
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormDescription v-if="props.description">{{ props.description }}</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
