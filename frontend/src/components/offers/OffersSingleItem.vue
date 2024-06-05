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
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  company: OfferCompany;
  class?: HTMLAttributes["class"];
}

const { positionName, contractType, positionLevel, expirationDate, salary, workMode, class: _class } = defineProps<OffersTableRowProps>();
</script>

<template>
  <Card class="flex flex-col p-3 hover:translate-y-[-2px] transition-transform">
    <!--    <CardHeader class="flex flex-row gap-2 p-2">-->
    <div class="flex justify-between self-stretch">
      <div class="flex gap-2 self-stretch">
        <img :src="company?.logoUrl ?? ''" alt="img alt" height="64" width="64" class="aspect-square rounded-md object-cover" />

        <div class="flex flex-col">
          <p class="text-lg">{{ positionName }}</p>
          <p class="text-sm text-muted-foreground">{{ company.name }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-between items-end">
        <p class="font-bold text-lg text-primary">{{ salary.min }} - {{ salary.max }}{{ salary.currency }}</p>
        <div class="flex gap-2">
          <MapPin />
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
