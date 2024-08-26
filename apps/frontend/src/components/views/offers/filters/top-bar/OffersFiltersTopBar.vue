<script setup lang="ts">
import { inject, type Ref, watch } from "vue";

import { coreSearchParamsSchema } from "shared/src/offers/offers.schemas";

import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";
import { debounce } from "@/utils/debounce";

import InputControlled from "@/components/common/form/inputs-controlled/InputControlled.vue";
import SelectControlled, { type SelectControlledItem } from "@/components/common/form/inputs-controlled/SelectControlled.vue";
import OffersFiltersTopBarInfoPopover from "./OffersFiltersTopBarInfoPopover.vue";

const sortItems: SelectControlledItem[] = [
  {
    content: "Od najnowszych",
    value: "createdAt",
  },
  {
    content: "Kończące się niedługo",
    value: "expirationDate",
  },
] as const;

const inputNames = parseZodSchemaToInputNames(coreSearchParamsSchema);

const values = inject<Ref<Record<string, unknown>>>("formValues");
const onSubmit = inject<(e: any) => void>("onSubmit");

watch(
  [values],
  debounce(() => {
    if (onSubmit) onSubmit(values);
  }, 600),
);
</script>
<template>
  <div class="bg-card flex w-full flex-row gap-2 max-lg:pt-2">
    <div class="relative flex w-full flex-row items-center gap-2">
      <InputControlled :name="inputNames.search" label="Szukaj" placeholder="Szukaj.." type="search" label-sr-only full-width />
      <OffersFiltersTopBarInfoPopover />
    </div>
    <SelectControlled name="orderBy" label="Sortuj" label-sr-only :items="sortItems" class-name="w-min sm:w-[200px]" />
  </div>
</template>
