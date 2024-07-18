<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-vue-next";

interface OffersStatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
}

const { title, value, description, icon } = defineProps<OffersStatCardProps>();
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle class="text-sm font-medium"> {{ title }}</CardTitle>
      <component v-if="Boolean(icon)" :is="icon" class="text-muted-foreground h-6 w-6" />
    </CardHeader>
    <CardContent>
      <p class="text-2xl font-bold">{{ value }}</p>
      <p class="text-muted-foreground text-xs">{{ description }}</p>
    </CardContent>
  </Card>
</template>
