<script setup lang="ts">
import type { DataSourceCodes } from "shared/src/offers/offers.types";
import { getServiceIconUrlByCode } from "@/utils/getServiceIconUrlByCode";

interface OfferSourceSiteProps {
  sourceCode: DataSourceCodes | undefined;
}

const { sourceCode } = defineProps<OfferSourceSiteProps>();

const dataSourceIcon = getServiceIconUrlByCode(sourceCode);
</script>
<template>
  <div class="flex items-center gap-2">
    <span class="text-muted-foreground text-sm">Pobrano z:</span>
    <img
      :src="dataSourceIcon?.url"
      :alt="dataSourceIcon?.alt"
      loading="lazy"
      width="64"
      class="aspect-square h-min rounded-md object-contain"
    />
  </div>
</template>
