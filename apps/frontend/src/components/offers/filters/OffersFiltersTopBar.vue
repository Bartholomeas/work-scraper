<script setup lang="ts">
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { useFilters } from "@/composables/useFilters";

import { coreSearchParamsSchema } from "shared/src/offers/offers.schemas";
import { Search } from "lucide-vue-next";
import SelectControlled, { type SelectControlledItem } from "@/components/common/form/inputs-controlled/SelectControlled.vue";
import InputControlled from "@/components/common/form/inputs-controlled/InputControlled.vue";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";

const filterOffersSchema = toTypedSchema(coreSearchParamsSchema);

const router = useRouter();
const { submitFilters } = useFilters();
const form = useForm({
  validationSchema: filterOffersSchema,
});

const sortItems: SelectControlledItem[] = [
  {
    content: "Najtrafniejsze",
    value: "relevant",
  },
  {
    content: "Od najnowszych",
    value: "createdAt",
  },
  {
    content: "Kończące się najwcześniej",
    value: "expirationDate",
  },
];

const kekw = parseZodSchemaToInputNames(coreSearchParamsSchema);
console.log("Kekw", kekw);

const onSubmit = form.handleSubmit(values => {
  submitFilters(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="flex flex-row gap-2 justify-end w-full">
      <InputControlled name="search" label="Szukaj" label-sr-only :icon="Search" type="search" placeholder="Szukaj.." full-width />
      <SelectControlled name="sortBy" label="Sortuj" label-sr-only :items="sortItems" />
    </div>
  </form>
</template>
