<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { getPercentOf } from "@/utils/getPercentOf";
import { DATE_FORMAT } from "@/constants";

import { useGetGeneralStatistics } from "@/api/statistics/getGeneralStatistics";

import OffersStatCard from "@/components/views/offers/list/offers-stat-card/OffersStatCard.vue";
import type { StatCardItem } from "@/components/views/offers/list/offers-stat-card/OffersStatCardItem.types";

import { BarChart, Building2, Cpu } from "lucide-vue-next";

const { data: stats } = useGetGeneralStatistics();

const serializedWorkplaces = computed(() =>
  stats.value?.topWorkplaces?.map(
    workplace =>
      ({
        id: workplace.id,
        label: workplace.city.toUpperCase(),
        value: workplace.count,
      }) satisfies StatCardItem,
  ),
);

const serializedCategories = computed(() =>
  stats.value?.topCategories?.map(
    category =>
      ({
        id: category.id,
        label: category.value.toUpperCase(),
        value: category?.count,
        percentageOfAll: getPercentOf(category?.count, stats.value?.totalOffers),
      }) satisfies StatCardItem,
  ),
);
</script>

<template>
  <section class="grid grid-cols-1 gap-2 sm:grid-cols-3">
    <OffersStatCard
      :key="`offerStatCard-${stats?.id}`"
      title="Najwięcej ofert"
      :cardValue="serializedWorkplaces"
      description="W tych miastach nie trudno o oferty!"
      :icon="Building2"
    />
    <div class="col-span-2 flex flex-col gap-2">
      <OffersStatCard
        :key="`offerStatCard-${stats?.id}`"
        :title="`Wszystkich ofert ${stats?.updatedAt ? `na dzień  ${dayjs(new Date(stats?.updatedAt)).format(DATE_FORMAT)}` : ''}`"
        :cardValue="stats?.totalOffers.toString() ?? '0'"
        description="Ofert łącznie"
        :icon="BarChart"
        items-wrapper-class-name="my-auto justify-center"
      />
      <OffersStatCard
        :key="`offerStatCard-${stats?.id}`"
        title="Najbardziej pożądane umiejętności"
        :cardValue="serializedCategories"
        description="Najczęściej występujące w ogłoszeniach"
        :icon="Cpu"
        items-wrapper-class-name="sm:grid sm:grid-cols-2 sm:gap-x-8"
      />
    </div>
  </section>
</template>
