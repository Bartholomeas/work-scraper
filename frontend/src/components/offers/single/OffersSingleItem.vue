<script setup lang="ts">
import { type HTMLAttributes, reactive } from "vue";
import { formatDate } from "@/lib/formatDate";

import type { JobOffer } from "shared/src/offers/offers.types";
import { formatPrice } from "@/lib/formatPrice";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import OffersDetailsDialog from "@/components/offers/single/OffersDetailsDialog.vue";
import OffersIconValueBox from "@/components/offers/single/OffersIconValueBox.vue";

import { ArrowRight, Building2, Calendar, Info, MapPin } from "lucide-vue-next";
import OfferBadges from "@/components/offers/single/OfferBadges.vue";
import { createStringFromArr } from "@/lib/createStringFromArr";

interface OffersTableRowProps {
  offer: JobOffer;
  class?: HTMLAttributes["class"];
}

const salary = reactive({
  min: 100,
  max: 1000,
  currency: "PL",
});

const { offer } = defineProps<OffersTableRowProps>();
</script>

<template>
  <Card
    class="flex flex-col p-3 gap-2 hover:translate-y-[-2px] transition-shadow transition-transform hover:z-30 hover:shadow-xl"
    :aria-label="`Otwórz szczegóły ogłoszenia: ${offer?.positionName ?? ''}`"
  >
    <div class="flex flex-col md:flex-row justify-between self-stretch">
      <div class="flex gap-2 self-stretch">
        <img
          :src="offer?.company?.logoUrl ?? ''"
          :alt="`Logo firmy ${offer?.company?.name}`"
          loading="lazy"
          height="64"
          width="64"
          class="aspect-square rounded-md object-contain"
        />
        <div class="flex flex-col">
          <h3 class="text-lg font-bold text-foreground">{{ offer?.positionName }}</h3>
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="createStringFromArr(offer?.workplace)" />
          <OffersIconValueBox :icon="Calendar" :value="formatDate(offer?.expirationDate)" />
        </div>
      </div>
      <div class="flex flex-col gap-2 justify-between md:items-end max-md:mt-2">
        <div class="flex flex-row-reverse justify-between items-end flex-nowrap gap-2 md:flex-col">
          <p class="font-bold text-lg text-primary md:mb-2 text-right">{{ formatPrice(salary.min) }} - {{ formatPrice(salary.max) }}</p>
          <!--        <OfferSourceSite :source-code="offer?.dataSourceCode" />-->
          <OfferBadges :position-levels="offer?.positionLevels" :work-modes="offer?.workModes" :contract-types="offer?.contractTypes" />
        </div>
        <div class="flex gap-2 items-center grow self-end max-md:w-full">
          <OffersDetailsDialog :offer="offer">
            <Button variant="secondary">
              Szczegóły
              <Info class="h-4 w-4 ml-2" />
            </Button>
          </OffersDetailsDialog>
          <a
            :href="offer?.offerUrls?.[0]"
            target="_blank"
            rel="nofollow, noopener,noreferrer"
            :class="buttonVariants({ className: 'max-md:w-full' })"
          >
            Przejdź do oferty
            <ArrowRight class="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  </Card>
</template>
