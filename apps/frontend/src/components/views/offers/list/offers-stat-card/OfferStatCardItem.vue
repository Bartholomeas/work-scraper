<script setup lang="ts">
import type { StatCardItem } from "@/components/views/offers/list/offers-stat-card/OffersStatCardItem.types";
import Text from "@/components/common/text/Text.vue";

interface OfferStatCardItemProps extends StatCardItem {}

const props = defineProps<OfferStatCardItemProps>();
</script>

<template>
  <div class="flex items-center justify-between gap-2">
    <Text size="sm" weight="semibold" transform="uppercase">
      {{ props.label }}
    </Text>
    <div class="flex items-center gap-2">
      <Text v-if="percentageOfAll" size="xs" color="muted"> {{ props.percentageOfAll }}</Text>
      <Text size="sm" weight="bold" color="primary">
        {{ props.value }}
      </Text>
    </div>
  </div>
</template>
