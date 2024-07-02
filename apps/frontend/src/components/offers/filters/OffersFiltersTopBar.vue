<script setup lang="ts">
import { watch } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { Search } from "lucide-vue-next";

import { coreSearchParamsSchema } from "shared/src/offers/offers.schemas";

import { useFilters } from "@/composables/useFilters";
import { debounce } from "@/utils/debounce";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";

import SelectControlled, { type SelectControlledItem } from "@/components/common/form/inputs-controlled/SelectControlled.vue";
import InputControlled from "@/components/common/form/inputs-controlled/InputControlled.vue";
import { HEADER_HEIGHT } from "@/constants";

const { submitFilters } = useFilters();
const form = useForm({
  validationSchema: toTypedSchema(coreSearchParamsSchema),
});

const sortItems: SelectControlledItem[] = [
  {
    content: "Od najnowszych",
    value: "createdAt",
  },
  {
    content: "Kończące się niedługo",
    value: "expirationDate",
  },
];

const inputNames = parseZodSchemaToInputNames(coreSearchParamsSchema);

const onSubmit = debounce(
  form.handleSubmit(values => {
    submitFilters(values);
  }),
);

watch([form.values], e => {
  onSubmit();
});
</script>

<template>
  <form @submit="onSubmit" class="sticky bg-background z-50 py-4" :style="{ top: `calc(${HEADER_HEIGHT - 8}px)` }">
    <div class="flex flex-row gap-2 justify-end w-full">
      <InputControlled
        :name="inputNames.search"
        label="Szukaj"
        placeholder="Szukaj.."
        type="search"
        :icon="Search"
        label-sr-only
        full-width
      />
      <SelectControlled name="orderBy" label="Sortuj" label-sr-only :items="sortItems" class-name="w-min sm:w-[200px]" />
    </div>
  </form>
</template>
