<script setup lang="ts">
import { computed, type HTMLAttributes, inject, ref, watch } from "vue";

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
  items: CommandItem[];
  commandPlaceholder?: string;
  labelClass?: HTMLAttributes["class"];
}

interface ComboboxControlledEmits {}

const props = withDefaults(defineProps<ComboboxControlledProps>(), {
  commandPlaceholder: "Wyszukaj..",
});
const setFieldValue = inject<(name: string, value: unknown) => void>("setFieldValue");
const values = inject<Record<string, unknown>>("formValues");

if (!setFieldValue)
  throw new Error("ComboboxControlled should be used within provided setFieldValue from useForm (like in <FiltersWrapper/>)");
if (!values)
  throw new Error("ComboboxControlled should be used within provided formValues (values) from useForm (like in <FiltersWrapper/>)");

const isPopoverOpen = ref(false);
const searchQuery = ref("");

const filteredItems = computed<CommandItem[]>(() => {
  if (!searchQuery.value) return props.items?.slice(0, 15) ?? [];
  return props.items.filter(item => item && item.label && item.label.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const onCommandInput = (e: InputEvent) => {
  searchQuery.value = (e.target as HTMLInputElement)?.value;
};

const emits = defineEmits<{
  (e: "chooseItem", value: string | number): void;
}>();
const onSelect = (value: string | number) => {
  setFieldValue(props.name, value);
  emits("chooseItem", value);
};

watch(isPopoverOpen, isOpen => {
  if (!isOpen) searchQuery.value = "";
});
</script>

<template>
  <FormField :name="props.name">
    <FormItem class="flex flex-col">
      <FormLabel :class="cn({ 'sr-only': props.labelSrOnly }, props.labelClass)">
        {{ props.label }}
      </FormLabel>

      <Popover v-model:open="isPopoverOpen">
        <PopoverTrigger as-child>
          <FormControl>
            <Button size="xl" variant="outline" role="combobox" aria-label="Zmień miejsce wyszukiwania" class="justify-start">
              {{
                props.items
                  ? (props.items?.find(item => {
                      return item.value === values?.[name];
                    })?.label ?? props.label)
                  : props.label
              }}
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent class="max-w-[220px] p-0">
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
                      onSelect(item.value);
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
