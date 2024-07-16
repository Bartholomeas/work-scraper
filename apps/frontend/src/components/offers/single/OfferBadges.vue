<script setup lang="ts">
import { computed } from "vue";

import type { JobOffer } from "shared/src/offers/offers.types";

import { Badge } from "@/components/ui/badge";
import { createStringFromArr } from "@/utils/createStringFromArr";
import { getCategoryName } from "@/utils/getCategoryName";

interface OfferBadgesProps {
  positionLevels: JobOffer["positionLevels"];
  workModes: JobOffer["workModes"];
  contractTypes: JobOffer["contractTypes"];
}

const { positionLevels, workModes, contractTypes } = defineProps<OfferBadgesProps>();

const positionLevelsString = computed(() => createStringFromArr(positionLevels.map(el => getCategoryName(el))).toUpperCase());
const workModesString = computed(() => createStringFromArr(workModes.map(el => getCategoryName(el))).toUpperCase());
const contractTypesString = computed(() => createStringFromArr(contractTypes.map(el => getCategoryName(el))).toUpperCase());
</script>

<template>
  <div class="flex flex-col md:flex-row gap-2">
    <Badge class="whitespace-nowrap" v-if="positionLevelsString">{{ positionLevelsString }}</Badge>
    <Badge class="whitespace-nowrap" variant="outline" v-if="workModesString">{{ workModesString }}</Badge>
    <Badge class="whitespace-nowrap" variant="secondary" v-if="contractTypesString">{{ contractTypesString }}</Badge>
  </div>
</template>

<style scoped></style>
