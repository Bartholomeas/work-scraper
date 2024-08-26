<script setup lang="ts">
import { NewsSingle } from "shared/src/news/news.types";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/common/text/Text.vue";

defineProps<{ newsItem: NewsSingle }>();
</script>

<template>
  <Card>
    <CardContent class="flex flex-col gap-6 py-2">
      <Text as="p" weight="bold">{{ newsItem.title }}</Text>
      <Text as="p">{{ newsItem.shortDescription }}</Text>
      <Text as="p" size="xs" color="muted">{{ newsItem.date }}</Text>
    </CardContent>
  </Card>
</template>
