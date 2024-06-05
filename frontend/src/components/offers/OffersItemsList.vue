<script setup lang="ts">
import OffersSingleItem from "@/components/offers/OffersSingleItem.vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <OffersSingleItem
      v-for="index in 10"
      :key="index"
      slug="slug"
      :position-name="'Junior .Net Developer'"
      contract-type="b2b"
      position-level="junior"
      work-mode="remote"
      expiration-date="21.06.2024"
      :salary="{
        min: 100,
        max: 1000,
        currency: 'pln',
      }"
      :company="{
        name: 'Firma ttt',
        logoUrl: 'https://logos.gpcdn.pl/loga-firm/18796991/03000000-bb2f-3863-bb16-08d8f9a11462_280x280.png',
      }"
    />
  </div>
</template>
