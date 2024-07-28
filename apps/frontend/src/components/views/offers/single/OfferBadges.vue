<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";

import type { JobOffer } from "shared/src/offers/offers.types";

import { cn } from "@/utils/utils";
import { createStringFromArr } from "@/utils/createStringFromArr";
import { getCategoryName } from "@/utils/getCategoryName";

import { Badge } from "@/components/ui/badge";

interface OfferBadgesProps {
  positionLevels: JobOffer["positionLevels"];
  workModes: JobOffer["workModes"];
  contractTypes: JobOffer["contractTypes"];
  className?: HTMLAttributes["class"];
}

const props = defineProps<OfferBadgesProps>();

const positionLevelsString = computed(() => createStringFromArr(props.positionLevels.map(el => getCategoryName(el))).toUpperCase());
const workModesString = computed(() => createStringFromArr(props.workModes.map(el => getCategoryName(el))).toUpperCase());
const contractTypesString = computed(() => createStringFromArr(props.contractTypes.map(el => getCategoryName(el))).toUpperCase());
</script>

<template>
  <div :class="cn('flex flex-col gap-2 md:flex-row', props.className)">
    <Badge class="whitespace-nowrap" v-if="positionLevelsString">{{ positionLevelsString }}</Badge>
    <Badge class="whitespace-nowrap" variant="outline" v-if="workModesString">{{ workModesString }}</Badge>
    <Badge class="whitespace-nowrap" variant="secondary" v-if="contractTypesString">{{ contractTypesString }}</Badge>
  </div>
</template>

<style scoped></style>
