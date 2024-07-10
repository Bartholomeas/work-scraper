<script setup lang="ts">
import { useGetOffersBaseCategories } from "@/api/offers/getOffersBaseCategories";
import { Card } from "@/components/ui/card";

const { data } = useGetOffersBaseCategories();
console.log("Xdd", data.value);
</script>

<template>
  <Card class="h-full p-2">xdd filtry tego</Card>
</template>

<style scoped></style>
