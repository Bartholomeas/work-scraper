<script setup lang="ts">
import { NewsSingle } from "shared/src/news/news.types";
import { Card, CardContent } from "@/components/ui/card";

import { computed } from "vue";

import { DATE_FORMAT_WITH_HOURS } from "@/constants";
import dayjs from "dayjs";

import Text from "@/components/common/text/Text.vue";

const props = defineProps<{ newsItem: NewsSingle }>();

const fullFormatDate = computed(() => {
  return dayjs(props.newsItem.date).format(DATE_FORMAT_WITH_HOURS);
});
</script>

<template>
  <Card
    class="before:shadow-primary relative transform p-0 transition-transform duration-300 ease-out before:absolute before:inset-0 before:rounded-lg before:opacity-0 before:shadow-lg before:transition-opacity before:duration-300 before:ease-out hover:translate-y-[-2px] hover:before:opacity-50"
  >
    <CardContent class="flex flex-col gap-4 py-4">
      <Text as="p" size="xs" color="muted">{{ fullFormatDate }}</Text>
      <Text as="p" weight="bold" color="primary" size="xl">{{ newsItem.title }}</Text>
      <Text as="p" size="sm" color="muted">{{ newsItem.shortDescription }}</Text>
    </CardContent>
  </Card>
</template>
