<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { ContractTypesCodes, OfferCompany, PositionLevelsCodes, WorkModesCodes } from "@/types/offers.types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-vue-next";

interface OffersTableRowProps {
  slug: string;
  positionName: string;
  contractType: ContractTypesCodes;
  positionLevel: PositionLevelsCodes;
  workMode: WorkModesCodes;
  expirationDate: string;
  workPlace: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  company: OfferCompany;
  class?: HTMLAttributes["class"];
}

const {
  positionName,
  contractType,
  positionLevel,
  expirationDate,
  salary,
  workMode,
  workPlace,
  class: _class,
} = defineProps<OffersTableRowProps>();
</script>

<template>
  <Card
    class="flex flex-col p-3 hover:translate-y-[-2px] cursor-pointer transition-shadow transition-transform hover:z-30 hover:shadow-xl"
    :aria-label="`Otwórz szczegóły ogłoszenia: ${positionName}`"
    @click="
      () => {
        console.log('kekw');
      }
    "
  >
    <div class="flex justify-between self-stretch">
      <div class="flex gap-2 self-stretch">
        <img
          loading="lazy"
          :src="company?.logoUrl ?? ''"
          alt="img alt"
          height="64"
          width="64"
          class="aspect-square rounded-md object-cover"
        />
        <div class="flex flex-col">
          <p class="text-lg">{{ positionName }}</p>
          <p class="text-sm text-muted-foreground">{{ company.name }}</p>
          <div class="flex items-center gap-1">
            <MapPin class="h-4 w-4 text-muted-foreground" />
            <p class="text-muted-foreground text-sm">{{ workPlace.join(", ") }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between items-end">
        <p class="font-bold text-lg text-primary">{{ salary.min }} - {{ salary.max }}{{ salary.currency }}</p>
        <p class="text-muted-foreground text-sm">{{ expirationDate }}</p>
        <div class="flex gap-2">
          <Badge>{{ positionLevel.toUpperCase() }}</Badge>
          <Badge variant="outline">{{ workMode.toUpperCase() }}</Badge>
          <Badge>{{ contractType }}</Badge>
        </div>
      </div>
    </div>
    <!--    </CardHeader>-->
    <!--    <CardContent class="p-2">-->

    <!--    <div class="flex flex-col gap-2">-->
    <!--      <Badge>{{ positionLevel.toUpperCase() }}</Badge>-->
    <!--      <Badge variant="outline">{{ workMode.toUpperCase() }}</Badge>-->
    <!--    </div>-->

    <!--    <div>{{ salary.min }} - {{ salary.max }}{{ salary.currency }}</div>-->
    <!--    </CardContent>-->
  </Card>
</template>
