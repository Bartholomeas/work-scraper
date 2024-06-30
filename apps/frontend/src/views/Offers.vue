<script setup lang="ts">
import { useRoute } from "vue-router";
import { useGetOffersList } from "@/api/offers/getOffers";

import OffersFiltersTopBar from "@/components/offers/filters/OffersFiltersTopBar.vue";
import OffersItemsTable from "@/components/offers/OffersItemsList.vue";
import OffersStatCards from "@/components/offers/OffersStatCards.vue";
import OffersListLayout from "@/components/offers/OffersListLayout.vue";
import OffersPagination from "@/components/offers/filters/OffersPagination.vue";
import { reactive, watch } from "vue";

const route = useRoute();

const queryParams = reactive({ search: route?.query?.search });

watch(
  () => route.query,
  newQuery => {
    queryParams.search = newQuery?.search;
    console.log("NEW QUERY", newQuery, queryParams);
  },
  {
    immediate: true,
  },
);
const { data } = useGetOffersList(queryParams);
</script>

<template>
  <div class="flex flex-col gap-6 bg-accent-card">
    <h1 class="text-[40px] font-bold">Oferty pracy</h1>
    <OffersStatCards />
    <OffersListLayout>
      <template #top-bar>
        <OffersFiltersTopBar />
      </template>
      <template #filters>
        <div>FILTRY TU BEDA</div>
      </template>
      <OffersItemsTable :offers="data?.data" />
      <template #pagination>
        <OffersPagination />
      </template>
    </OffersListLayout>
  </div>
</template>
