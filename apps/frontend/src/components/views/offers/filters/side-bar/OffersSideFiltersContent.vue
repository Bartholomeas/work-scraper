<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";

import { baseCategoriesSchema } from "shared/src/offers/offers.schemas";
import type {
  CategoryRecord,
  ContractTypesCodes,
  DataSourceCodes,
  PositionLevelsCodes,
  WorkModesCodes,
  WorkSchedulesCodes,
} from "shared/src/offers/offers.types";

import { useGetOffersBaseFilters } from "@/api/offers/getOffersBaseFilters";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";

import { isKeyOf } from "@/utils/isKeyOf";
import { getCategoryName } from "@/utils/getCategoryName";

import { useFilters } from "@/composables/useFilters/useFilters";

import OffersSidebarButtons from "@/components/views/offers/filters/side-bar/OffersSidebarButtons.vue";
import CheckboxControlled from "@/components/common/form/inputs-controlled/checkbox-controlled/CheckboxControlled.vue";
import FiltersWrapper from "@/components/special/FiltersWrapper.vue";
import CheckboxControlledSkeleton from "@/components/common/form/inputs-controlled/checkbox-controlled/CheckboxControlledSkeleton.vue";
import OffersSideWorkplaceSelectSkeleton from "@/components/views/offers/filters/side-bar/side-workplace-select/OffersSideWorkplaceSelectSkeleton.vue";

const OffersSideWorkplaceSelect = defineAsyncComponent(
  () => import("@/components/views/offers/filters/side-bar/side-workplace-select/OffersSideWorkplaceSelect.vue"),
);

const { data: baseFilters, isLoading } = useGetOffersBaseFilters();
const { getValueOfQueryKey } = useFilters();

const defaultInitValues = computed(() => ({
  positionLevels: [],
  contractTypes: [],
  workModes: [],
  workSchedules: [],
  dataSources: [],
  categories: [],
}));

const initialParamsValues = computed(() => ({
  positionLevels: (getValueOfQueryKey("positionLevels")?.split(",") as PositionLevelsCodes[]) ?? [],
  contractTypes: (getValueOfQueryKey("contractTypes")?.split(",") as ContractTypesCodes[]) ?? [],
  workModes: (getValueOfQueryKey("workModes")?.split(",") as WorkModesCodes[]) ?? [],
  workSchedules: (getValueOfQueryKey("workSchedules")?.split(",") as WorkSchedulesCodes[]) ?? [],
  dataSources: (getValueOfQueryKey("dataSources")?.split(",") as DataSourceCodes[]) ?? [],
  categories: getValueOfQueryKey("categories")?.split(",") ?? [],
}));

const inputNames = computed(() => parseZodSchemaToInputNames(baseCategoriesSchema));

const skeletonsArray = computed(() => new Array(6).fill(0).map((_, i) => i));
</script>
<template>
  <aside class="relative h-full w-full overflow-y-auto">
    <FiltersWrapper
      class-name="flex flex-col gap-4 max-lg:pb-6 pr-2"
      v-slot="{ clearFilters, resetForm }"
      :filters-schema="baseCategoriesSchema"
      :initial-values="initialParamsValues"
    >
      <Suspense>
        <OffersSideWorkplaceSelect :name="inputNames.workplaces" />
        <template #fallback>
          <OffersSideWorkplaceSelectSkeleton />
        </template>
      </Suspense>

      <CheckboxControlledSkeleton
        v-for="skeleton in skeletonsArray"
        v-if="isLoading"
        :numberOfItems="5"
        :key="`checkboxControlledSkeleton-${skeleton}`"
      />
      <template v-else-if="baseFilters" v-for="[key, category] in Object.entries(baseFilters)">
        <CheckboxControlled
          v-if="isKeyOf(inputNames, key)"
          :label="category?.name"
          :name="inputNames?.[key]"
          :items="category.items?.map((cat: CategoryRecord) => ({ ...cat, label: getCategoryName(cat.value) }))"
        />
      </template>

      <OffersSidebarButtons :clear-filters="clearFilters" :reset-form="resetForm" :default-init-values="defaultInitValues" />
    </FiltersWrapper>
  </aside>
</template>
