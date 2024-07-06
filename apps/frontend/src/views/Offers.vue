<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";

import { useGetOffersList } from "@/api/offers/getOffers";

import OffersFiltersTopBar from "@/components/offers/filters/OffersFiltersTopBar.vue";
import OffersItemsTable from "@/components/offers/OffersItemsList.vue";
import OffersStatCards from "@/components/offers/OffersStatCards.vue";
import OffersListLayout from "@/components/offers/OffersListLayout.vue";
import OffersPagination from "@/components/offers/filters/OffersPagination.vue";

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
const { data, isFetched } = useGetOffersList(queryParams);

const paginationData = ref();

watch(
  () => data.value,
  newData => {
    paginationData.value = newData?.meta;
    console.log("xdd data", newData?.meta);
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
        <!--        <div>FILTRY TU BEDA</div>-->
      </template>
      <OffersItemsTable :offers="data?.data" />
      <template #pagination>
        <OffersPagination :meta="data?.meta" />
      </template>
    </OffersListLayout>
  </div>
</template>
