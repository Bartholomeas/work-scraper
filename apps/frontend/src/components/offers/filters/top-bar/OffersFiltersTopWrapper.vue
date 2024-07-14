<script setup lang="ts">
import { coreSearchParamsSchema } from "shared/src/offers/offers.schemas";

import { HEADER_HEIGHT } from "@/constants";

import FiltersWrapper from "@/components/special/FiltersWrapper.vue";
import OffersFiltersTopBar from "@/components/offers/filters/top-bar/OffersFiltersTopBar.vue";
</script>

<template>
  <FiltersWrapper
    :filters-schema="coreSearchParamsSchema"
    :debounce-time="300"
    class-name="sticky bg-background z-50 pt-4 shadow-xl lg:pt-0"
    :style="{ top: `calc(${HEADER_HEIGHT}px)` }"
  >
    <OffersFiltersTopBar />
  </FiltersWrapper>
</template>
