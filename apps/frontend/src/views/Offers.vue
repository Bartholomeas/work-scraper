<script setup lang="ts">
import { defineAsyncComponent, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { useGetOffersList } from "@/api/offers/getOffers";

import OffersFiltersTopBar from "@/components/offers/filters/OffersFiltersTopBar.vue";
import OffersListLayout from "@/components/offers/OffersListLayout.vue";
import OffersItemsList from "@/components/offers/OffersItemsList.vue";
import OfferSingleItemSkeleton from "@/components/offers/single/OfferSingleItemSkeleton.vue";

const OffersStatCards = defineAsyncComponent(() => import("@/components/offers/OffersStatCards.vue"));
const OffersSideFilters = defineAsyncComponent(() => import("@/components/offers/filters/sidebar/OffersSideFilters.vue"));
const OffersPagination = defineAsyncComponent(() => import("@/components/offers/filters/OffersPagination.vue"));

const route = useRoute();

const queryParams = reactive(route?.params);

watch(
  () => route.query,
  newQuery => {
    Object.assign(queryParams, newQuery);
  },
  {
    immediate: true,
  },
);
const { data, isLoading } = useGetOffersList(queryParams);

const paginationData = ref();

watch(
  () => data.value,
  newData => {
    paginationData.value = newData?.meta;
  },
);
</script>

<template>
  <div class="flex flex-col gap-6 bg-accent-card w-full">
    <h1 class="text-[36px] font-bold">Oferty pracy</h1>
    <OffersStatCards />
    <OffersListLayout>
      <template #top-bar>
        <OffersFiltersTopBar />
      </template>
      <template #filters>
        <OffersSideFilters />
      </template>
      <div v-if="isLoading" class="flex flex-col gap-2 w-full">
        <OfferSingleItemSkeleton
          v-if="isLoading"
          v-for="(item, index) in Array.from({ length: 10 })"
          :key="`singleItemSkeleton-${index}`"
        />
      </div>
      <OffersItemsList v-else :offers="data?.data" />

      <template #pagination>
        <OffersPagination :meta="data?.meta" />
      </template>
    </OffersListLayout>
  </div>
</template>
