<script setup lang="ts">
import { ref } from "vue";
import OffersSideFiltersContent from "@/components/offers/filters/side-bar/OffersSideFiltersContent.vue";
import OffersSideFiltersDesktop from "@/components/offers/filters/side-bar/OffersSideFiltersDesktop.vue";
import OffersSideFiltersMobile from "@/components/offers/filters/side-bar/OffersSideFiltersMobile.vue";

// const { data } = useGetOffersBaseCategories();
// console.log("Xdd", data);

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
  <!--  <Card as="aside" class="h-full p-2 w-0 lg:w-1/4">xdd filtry tego</Card>-->
</template>
