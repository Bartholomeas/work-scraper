<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

import { useGetOffersList } from "@/api/offers/getOffers";

import Title from "@/components/common/title/Title.vue";
import Text from "@/components/common/text/Text.vue";
import OffersFiltersTopBar from "@/components/views/offers/filters/top-bar/OffersFiltersTopWrapper.vue";
import OffersListLayout from "@/components/views/offers/OffersListLayout.vue";
import OffersItemsList from "@/components/views/offers/list/OffersItemsList.vue";
import OffersStatCardsSkeleton from "@/components/views/offers/list/OffersStatCardsSkeleton.vue";

const OffersStatCards = defineAsyncComponent(() => import("@/components/views/offers/list/OffersStatCards.vue"));
const OffersSideFilters = defineAsyncComponent(() => import("@/components/views/offers/filters/side-bar/OffersSideFilters.vue"));
const OffersPagination = defineAsyncComponent(() => import("@/components/views/offers/filters/OffersPagination.vue"));

const route = useRoute();
const params = computed(() => route.query);

const { data, isLoading } = useGetOffersList(params);
</script>

<template>
  <div class="bg-accent-card flex w-full flex-col gap-6">
    <Title order="h1" size="h1" class="font-bold">Oferty pracy</Title>
    <Suspense>
      <OffersStatCards />
      <template #fallback>
        <OffersStatCardsSkeleton />
      </template>
    </Suspense>
    <div class="flex flex-col gap-0">
      <div class="my-6 flex flex-col gap-2">
        <Title order="h2" size="h3" class="font-bold">Znajdź interesujące Cię oferty</Title>
        <Text color="muted" size="md">
          Znalezionych ofert: <Text as="span" weight="bold">{{ data?.meta?.total ?? 0 }}</Text></Text
        >
      </div>
      <OffersListLayout>
        <template #top-bar>
          <OffersFiltersTopBar />
        </template>
        <template #filters class="relative bg-amber-400">
          <OffersSideFilters />
        </template>
        <OffersItemsList :offers="data?.data" :is-loading="isLoading" />
        <template #pagination>
          <OffersPagination :meta="data?.meta" />
        </template>
      </OffersListLayout>
    </div>
  </div>
</template>
