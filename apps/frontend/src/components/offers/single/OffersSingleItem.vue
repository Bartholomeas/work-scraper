<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue";
import { formatDate } from "@/utils/formatDate";

import type { JobOffer } from "shared/src/offers/offers.types";
import { formatPrice } from "@/utils/formatPrice";

import { Button, buttonVariants } from "@/components/ui/button/Button.variants";
import { Card } from "@/components/ui/card";

import OffersDetailsDialog from "@/components/offers/single/OffersDetailsDialog.vue";
import OffersIconValueBox from "@/components/offers/single/OffersIconValueBox.vue";

import { ArrowRight, Building2, Calendar, Info, MapPin } from "lucide-vue-next";
import OfferBadges from "@/components/offers/single/OfferBadges.vue";
import { createStringFromArr } from "@/utils/createStringFromArr";
import { transformTimeUnitType } from "@/utils/apiCodesTransform";

interface OffersTableRowProps {
  offer: JobOffer;
  class?: HTMLAttributes["class"];
}

const { offer } = defineProps<OffersTableRowProps>();

const minPrice = computed(() => formatPrice(offer?.salaryRange[0]?.min, offer?.salaryRange[0]?.currency));
const maxPrice = computed(() => formatPrice(offer?.salaryRange[0]?.max, offer?.salaryRange[0]?.currency));

const salaryRangeString = computed(() =>
  !offer?.salaryRange[0]?.min || !offer?.salaryRange[0]?.max
    ? undefined
    : `${minPrice.value} - ${maxPrice.value}, ${offer?.salaryRange[0]?.type ?? ""}` +
      (offer?.salaryRange[0]?.timeUnit ? ` / ${transformTimeUnitType(offer?.salaryRange[0]?.timeUnit)}` : ""),
);
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
          height="96"
          width="96"
          class="aspect-square rounded-md object-contain bg-white p-2"
        />
        <div class="flex flex-col">
          <h3 class="text-lg font-bold text-foreground">{{ offer?.positionName }}</h3>
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="createStringFromArr(offer?.workplaces)" />
          <OffersIconValueBox :icon="Calendar" :value="formatDate(offer?.expirationDate)" />
        </div>
      </div>
      <div class="flex flex-col gap-2 justify-between md:items-end max-md:mt-2">
        <div class="flex flex-row-reverse justify-between items-end flex-nowrap gap-2 md:flex-col">
          <p class="font-bold text-lg text-primary md:mb-2 text-right">{{ salaryRangeString ?? "Nie podano" }}</p>
          <OfferBadges :position-levels="offer?.positionLevels" :work-modes="offer?.workModes" :contract-types="offer?.contractTypes" />
        </div>
        <div class="flex gap-2 items-center grow self-end max-md:w-full">
          <OffersDetailsDialog :offer="offer" :salary-text="salaryRangeString ?? 'Nie podano'">
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
