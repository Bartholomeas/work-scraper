<script setup lang="ts">
import { useGetDailyCategoriesOffersCount } from "@/api/statistics/getDailyCategoriesOffersCount";
import StatsTitleWrapper from "@/components/views/statistics/StatsTitleWrapper.vue";
import { BarChart } from "@/components/ui/chart-bar";
import dayjs from "dayjs";
import { computed } from "vue";
import { DATE_FORMAT } from "@/constants";

const categoryLabel = "Kategoria";
const countLabel = "Liczba ofert w danym momencie";

const { data: stats } = useGetDailyCategoriesOffersCount();

// const chartData = computed(
//   () =>
//     stats?.value?.map(stat => ({
//       createdAt: dayjs(stat.createdAt).format(`${DATE_FORMAT} HH:mm`),
//       categories: stat?.categories?.map(category => ({
//         name: category.name,
//         count: category.count,
//       })),
//     })) ?? [],
// );

const chartData = computed(
  // () => [
  //   {
  //     createdAt: dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm`),
  //     count: 2340,
  //     [`PHP-1`]: 200,
  //     [`C#-2`]: 600,
  //     [`Javascript-3`]: 800,
  //   },
  //   {
  //     createdAt: dayjs(Date.now()).format(`${DATE_FORMAT} HH:mm`),
  //     count: 2000,
  //     [`PHP-1`]: 660,
  //     [`C#-2`]: 670,
  //     [`Javascript-3`]: 600,
  //   },
  // ],
  () =>
    stats?.value?.flatMap(stat => ({
      createdAt: dayjs(stat.createdAt).format(`${DATE_FORMAT} HH:mm`),
      categories: stat?.categories?.map((category, index) => ({
        [`Kategoria ${index + 1}`]: category.count,
      })),
    })) ?? [],
);
console.log("KEKEKEK", chartData.value);

// const chartData = [
//   { name: "Jan", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "Feb", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "Mar", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "Apr", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "May", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "Jun", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
//   { name: "Jul", total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
// ];
</script>

<template>
  <StatsTitleWrapper title="Według kategorii">
    <BarChart
      class="charts"
      :data="chartData"
      index="count"
      :categories="['Kategoria-1', 'Kategoria-2', 'Kategoria-3']"
      :colors="['var(--primary)', 'gold']"
      :rounded-corners="8"
      x-formatter=""
    />
  </StatsTitleWrapper>
</template>
