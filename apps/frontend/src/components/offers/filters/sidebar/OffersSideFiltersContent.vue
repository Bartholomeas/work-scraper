<script setup lang="ts">
import { useGetOffersBaseCategories } from "@/api/offers/getOffersBaseCategories";
import OffersSidebarButtons from "@/components/offers/filters/sidebar/OffersSidebarButtons.vue";
import { watch } from "vue";

const { data } = useGetOffersBaseCategories();
watch(
  () => data.value,
  categories => {
    if (categories)
      for (let cat of Object.values(categories)) {
        console.log("Xdd", cat);
      }
  },
);
</script>
<template>
  <aside class="w-full h-full p-3 flex flex-col gap-4">
    <div v-if="data" v-for="category in Object.values(data)" :key="`categoryBox-${category.name}`">
      {{ category.name }}
      <div v-for="catValue in category.items" :key="`categoryValue-${catValue.id}`">
        {{ catValue.value }}
      </div>
    </div>
    <OffersSidebarButtons />
  </aside>
</template>
