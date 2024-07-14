<script setup lang="ts">
import { baseCategoriesSchema } from "shared/src/offers/offers.schemas";
import type { CategoryRecord } from "shared/src/offers/offers.types";

import { useGetOffersBaseCategories } from "@/api/offers/getOffersBaseCategories";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";
import { isKeyOf } from "@/utils/isKeyOf";

import OffersSidebarButtons from "@/components/offers/filters/side-bar/OffersSidebarButtons.vue";
import CheckboxControlled from "@/components/common/form/inputs-controlled/CheckboxControlled.vue";
import FiltersWrapper from "@/components/special/FiltersWrapper.vue";

const { data: categories } = useGetOffersBaseCategories();
const inputNames = parseZodSchemaToInputNames(baseCategoriesSchema);
</script>
<template>
  <aside class="w-full h-full overflow-y-auto lg:p-3">
    <FiltersWrapper
      class-name="flex flex-col gap-4 max-lg:pb-6"
      v-slot="{ clearFilters }"
      :filters-schema="baseCategoriesSchema"
      :initial-values="{
        positionLevels: [],
        contractTypes: [],
        workModes: [],
        workSchedules: [],
      }"
    >
      <CheckboxControlled
        v-if="categories"
        v-for="[key, category] in Object.entries(categories)"
        :label="category?.name"
        :name="isKeyOf(inputNames, key) ? inputNames?.[key] : null"
        :items="category.items?.map((cat: CategoryRecord) => ({ ...cat, label: cat.value }))"
      />

      <OffersSidebarButtons :clear-filters="clearFilters" />
    </FiltersWrapper>
    <!--    </form>-->
  </aside>
</template>
