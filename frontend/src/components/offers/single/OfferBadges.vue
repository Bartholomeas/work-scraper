<script setup lang="ts">
import { computed } from "vue";

import type { JobOffer } from "shared/src/offers/offers.types";

import { Badge } from "@/components/ui/badge";
import { createStringFromArr } from "@/lib/createStringFromArr";

interface OfferBadgesProps {
  positionLevels: JobOffer["positionLevels"];
  workModes: JobOffer["workModes"];
  contractTypes: JobOffer["contractTypes"];
}

const { positionLevels, workModes, contractTypes } = defineProps<OfferBadgesProps>();

const positionLevelsString = computed(() => createStringFromArr(positionLevels).toUpperCase());
const workModesString = computed(() => createStringFromArr(workModes).toUpperCase());
const contractTypesString = computed(() => createStringFromArr(contractTypes).toUpperCase());
</script>

<template>
  <div class="flex gap-2">
    <Badge v-if="positionLevelsString">{{ positionLevelsString }}</Badge>
    <Badge v-if="workModesString" variant="outline">{{ workModesString }}</Badge>
    <Badge v-if="contractTypesString">{{ contractTypesString }}</Badge>
  </div>
</template>

<style scoped></style>
