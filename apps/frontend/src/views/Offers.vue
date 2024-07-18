<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

import { useGetOffersList } from "@/api/offers/getOffers";

import OffersFiltersTopBar from "@/components/offers/filters/top-bar/OffersFiltersTopWrapper.vue";
import OffersListLayout from "@/components/offers/OffersListLayout.vue";
import OffersItemsList from "@/components/offers/OffersItemsList.vue";

const OffersStatCards = defineAsyncComponent(() => import("@/components/offers/OffersStatCards.vue"));
const OffersSideFilters = defineAsyncComponent(() => import("@/components/offers/filters/side-bar/OffersSideFilters.vue"));
const OffersPagination = defineAsyncComponent(() => import("@/components/offers/filters/OffersPagination.vue"));

const route = useRoute();
const params = computed(() => route.query);

const { data, isLoading } = useGetOffersList(params);
</script>

<template>
  <div class="bg-accent-card flex w-full flex-col gap-6">
    <h1 class="text-[36px] font-bold">Oferty pracy</h1>
    <OffersStatCards />
    <OffersListLayout>
      <template #top-bar>
        <OffersFiltersTopBar />
      </template>
      <template #filters class="relative">
        <OffersSideFilters />
      </template>
      <OffersItemsList :offers="data?.data" :is-loading="isLoading" />
      <template #pagination>
        <OffersPagination :meta="data?.meta" />
      </template>
    </OffersListLayout>
  </div>
</template>
