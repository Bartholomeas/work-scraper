<script setup lang="ts">
import { ref } from "vue";

import { useGetWorkplaces } from "@/api/offers/getWorkplaces";

import OffersSideFiltersContent from "@/components/views/offers/filters/side-bar/OffersSideFiltersContent.vue";
import OffersSideFiltersDesktop from "@/components/views/offers/filters/side-bar/OffersSideFiltersDesktop.vue";
import OffersSideFiltersMobile from "@/components/views/offers/filters/side-bar/OffersSideFiltersMobile.vue";

const { data } = useGetWorkplaces();

const isMobileScreen = ref(window.innerWidth < 992);

window.addEventListener("resize", () => {
  isMobileScreen.value = window.innerWidth < 992;
});
</script>
<template>
  <OffersSideFiltersMobile v-if="isMobileScreen">
    <OffersSideFiltersContent />
  </OffersSideFiltersMobile>
  <OffersSideFiltersDesktop v-else>
    <OffersSideFiltersContent />
  </OffersSideFiltersDesktop>
</template>
