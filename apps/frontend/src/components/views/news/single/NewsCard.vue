<script setup lang="ts">
import { NewsSingle } from "shared/src/news/news.types";
import { Card, CardContent } from "@/components/ui/card";

import { computed } from "vue";

import { DATE_FORMAT_WITH_HOURS } from "@/constants";
import dayjs from "dayjs";

import Text from "@/components/common/text/Text.vue";
import { hoverCardClasses } from "@/styles/hover-styles";

const props = defineProps<{ newsItem: NewsSingle }>();

const fullFormatDate = computed(() => {
  return dayjs(props.newsItem.date).format(DATE_FORMAT_WITH_HOURS);
});
</script>

<template>
  <Card :class="['relative transform p-0 transition-transform duration-300 ease-out', hoverCardClasses]">
    <CardContent class="flex flex-col gap-4 py-4">
      <Text as="p" size="xs" color="muted">{{ fullFormatDate }}</Text>
      <Text as="p" weight="bold" color="primary" size="xl">{{ newsItem.title }}</Text>
      <Text as="p" size="sm" color="muted">{{ newsItem.shortDescription }}</Text>
    </CardContent>
  </Card>
</template>
