<script setup lang="ts">
import OffersSingleItem from "@/components/offers/single/OffersSingleItem.vue";
import { useGetOffersList } from "@/api/getOffers";

const { data } = useGetOffersList();
</script>

<template>
  <div class="flex flex-col gap-2" v-if="data && data?.data.length > 0">
    <OffersSingleItem v-for="item in data?.data.slice(0, 15)" :key="item.id" :offer="item" />
  </div>
</template>
