<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Text from "@/components/common/text/Text.vue";
import OfferStatCardItem from "@/components/offers/list/offers-stat-card/OfferStatCardItem.vue";
import type { StatCardItem } from "@/components/offers/list/offers-stat-card/OffersStatCardItem.types";

import { type LucideIcon } from "lucide-vue-next";
import { cn } from "@/utils/utils";
import type { HTMLAttributes } from "vue";

interface OffersStatCardProps {
  title: string;
  cardValue: string | StatCardItem[] | undefined;
  description?: string;
  icon?: LucideIcon;
  itemsWrapperClassName?: HTMLAttributes["class"];
}

const isOffersStatCardItem = (data: unknown): data is StatCardItem[] => Array.isArray(data) && data?.every(el => el?.label && el?.value);

const props = defineProps<OffersStatCardProps>();
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle class="mb-2 text-xl"> {{ props.title }}</CardTitle>
      <component v-if="Boolean(props.icon)" :is="props.icon" class="text-muted-foreground h-6 w-6" />
    </CardHeader>
    <CardContent>
      <Text v-if="typeof props.cardValue === 'string'" size="2xl" weight="bold">
        {{ props.cardValue }}
      </Text>
      <div :class="cn('flex flex-col gap-1', props.itemsWrapperClassName)" v-else-if="isOffersStatCardItem(props.cardValue)">
        <OfferStatCardItem v-for="item in props.cardValue" :key="`offerStatCardItem-${item.id}`" v-bind="item" />
      </div>
      <Text v-if="props.description" as="span" color="muted" size="xs">{{ props.description }}</Text>
    </CardContent>
  </Card>
</template>
