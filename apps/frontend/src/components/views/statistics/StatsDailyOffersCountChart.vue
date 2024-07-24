<script setup lang="ts">
import { AreaChart } from "@/components/ui/chart-area";

const countLabel = "Liczba ofert w danym momencie";

const data = [
  {
    name: "Jan",
    [countLabel]: 2000,
    predicted: 500,
  },
  {
    name: "Feb",
    [countLabel]: 1854,
    predicted: 500,
  },
  {
    name: "Mar",
    [countLabel]: 1923,
    predicted: 500,
  },
  {
    name: "Apr",
    [countLabel]: 2000,
    predicted: 500,
  },
  {
    name: "May",
    [countLabel]: 2000,
    predicted: 500,
  },
  {
    name: "Jun",
    [countLabel]: 2000,
    predicted: 500,
  },
  {
    name: "Jul",
    [countLabel]: 2000,
    predicted: 500,
  },
];
</script>

<template>
  <AreaChart :data="data" index="name" :colors="['lime']" :categories="[countLabel]" />
</template>
