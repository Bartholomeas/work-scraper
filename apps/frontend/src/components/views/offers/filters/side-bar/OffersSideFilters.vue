<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

import OffersSideFiltersDesktop from "@/components/views/offers/filters/side-bar/OffersSideFiltersDesktop.vue";
import OffersSideFiltersMobile from "@/components/views/offers/filters/side-bar/OffersSideFiltersMobile.vue";

const OffersSideFiltersContent = defineAsyncComponent(
  () => import("@/components/views/offers/filters/side-bar/OffersSideFiltersContent.vue"),
);

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
