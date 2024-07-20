<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Text from "@/components/common/text/Text.vue";
import { type LucideIcon } from "lucide-vue-next";

interface ValueItem {
  label: string;
  value: string | number;
  percentageOfAll?: number;
}

interface OffersStatCardProps {
  title: string;
  value: string | ValueItem[];
  description?: string;
  icon?: LucideIcon;
}

const props = defineProps<OffersStatCardProps>();
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle> {{ props.title }}</CardTitle>
      <component v-if="Boolean(props.icon)" :is="props.icon" class="text-muted-foreground h-6 w-6" />
    </CardHeader>
    <CardContent>
      <Text v-if="typeof props.value === 'string'" size="2xl" weight="bold">
        {{ props.value }}
      </Text>
      <Text v-if="props.description" as="span" color="muted" size="xs">{{ props.description }}</Text>
    </CardContent>
  </Card>
</template>
