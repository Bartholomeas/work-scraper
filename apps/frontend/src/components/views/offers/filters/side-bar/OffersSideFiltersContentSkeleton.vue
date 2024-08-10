<script setup lang="ts">
import { computed } from "vue";

import OffersSidebarButtons from "@/components/views/offers/filters/side-bar/OffersSidebarButtons.vue";
import CheckboxControlledSkeleton from "@/components/common/form/inputs-controlled/checkbox-controlled/CheckboxControlledSkeleton.vue";
import OffersSideWorkplaceSelectSkeleton from "@/components/views/offers/filters/side-bar/side-workplace-select/OffersSideWorkplaceSelectSkeleton.vue";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { HEADER_HEIGHT } from "@/constants";

const defaultInitValues = computed(() => ({
  positionLevels: [],
  contractTypes: [],
  workModes: [],
  workSchedules: [],
  dataSources: [],
  categories: [],
}));

const skeletonsArray = computed(() => new Array(6).fill(0).map((_, i) => i));
</script>
<template>
  <Card
    class="sticky top-20 flex h-fit min-h-[60dvh] flex-col gap-2 p-4 pb-2 pr-2 lg:mt-2"
    :style="{
      maxHeight: `calc(100dvh - ${HEADER_HEIGHT + 32}px)`,
    }"
  >
    <aside class="relative h-full w-full overflow-y-auto">
      <div class="flex flex-col gap-4 pr-2 max-lg:pb-6">
        <Skeleton class="mb-2 h-6 w-1/3" />
        <OffersSideWorkplaceSelectSkeleton />

        <CheckboxControlledSkeleton v-for="skeleton in skeletonsArray" :numberOfItems="5" :key="`checkboxControlledSkeleton-${skeleton}`" />

        <OffersSidebarButtons :clear-filters="() => {}" :reset-form="() => {}" :default-init-values="defaultInitValues" />
      </div>
    </aside>
  </Card>
</template>
