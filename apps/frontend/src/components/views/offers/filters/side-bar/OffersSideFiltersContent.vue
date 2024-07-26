<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";

import { baseCategoriesSchema } from "shared/src/offers/offers.schemas";
import type { CategoryRecord } from "shared/src/offers/offers.types";

import { useGetOffersBaseFilters } from "@/api/offers/getOffersBaseFilters";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";

import { isKeyOf } from "@/utils/isKeyOf";
import { getCategoryName } from "@/utils/getCategoryName";

import OffersSidebarButtons from "@/components/views/offers/filters/side-bar/OffersSidebarButtons.vue";
import CheckboxControlled from "@/components/common/form/inputs-controlled/CheckboxControlled.vue";
import FiltersWrapper from "@/components/special/FiltersWrapper.vue";

const OffersSideWorkplaceSelect = defineAsyncComponent(
  () => import("@/components/views/offers/filters/side-bar/OffersSideWorkplaceSelect.vue"),
);

const { data: baseFilters } = useGetOffersBaseFilters();
const inputNames = computed(() => parseZodSchemaToInputNames(baseCategoriesSchema));
</script>
<template>
  <aside class="relative h-full w-full overflow-y-auto lg:p-3">
    <FiltersWrapper
      class-name="flex flex-col gap-4 max-lg:pb-6"
      v-slot="{ clearFilters }"
      :filters-schema="baseCategoriesSchema"
      :initial-values="{
        positionLevels: [],
        contractTypes: [],
        workModes: [],
        workSchedules: [],
        categories: [],
      }"
    >
      <OffersSideWorkplaceSelect :name="inputNames.workplaces" />

      <template v-if="baseFilters" v-for="[key, category] in Object.entries(baseFilters)">
        <CheckboxControlled
          v-if="isKeyOf(inputNames, key)"
          :label="category?.name"
          :name="inputNames?.[key]"
          :items="category.items?.map((cat: CategoryRecord) => ({ ...cat, label: getCategoryName(cat.value) }))"
        />
      </template>

      <OffersSidebarButtons :clear-filters="clearFilters" />
    </FiltersWrapper>
  </aside>
</template>
