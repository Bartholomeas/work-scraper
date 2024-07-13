<script setup lang="ts">
import { Form, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { baseCategoriesSchema } from "shared/src/offers/offers.schemas";
import type { CategoryRecord } from "shared/src/offers/offers.types";

import { useGetOffersBaseCategories } from "@/api/offers/getOffersBaseCategories";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";

import OffersSidebarButtons from "@/components/offers/filters/sidebar/OffersSidebarButtons.vue";
import CheckboxControlled from "@/components/common/form/inputs-controlled/CheckboxControlled.vue";
import { isKeyOf } from "@/utils/isKeyOf";

const { data: categories } = useGetOffersBaseCategories();
const inputNames = parseZodSchemaToInputNames(baseCategoriesSchema);

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(baseCategoriesSchema),
  initialValues: {
    positionLevels: [],
    contractTypes: [],
    workModes: [],
    workSchedules: [],
  },
});

// type OffersCategoriesEntriesTuple = [keyof OffersBaseCategories, unknown];

const onSubmit = handleSubmit(values => {
  console.log("Submit filtrow: ", values);
});
</script>
<template>
  <aside class="w-full h-full overflow-y-auto lg:p-3">
    <form @submit="onSubmit" class="flex flex-col gap-4 max-lg:pb-6">
      <CheckboxControlled
        v-if="categories"
        v-for="[key, category] in Object.entries(categories) as [any, any]"
        :label="category?.name"
        :name="isKeyOf(inputNames, key) ? inputNames?.[key] : null"
        :items="category.items?.map((cat: CategoryRecord) => ({ ...cat, label: cat.value }))"
      />

      <OffersSidebarButtons />
    </form>
  </aside>
</template>
