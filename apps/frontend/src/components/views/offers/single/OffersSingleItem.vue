<script setup lang="ts">
import { computed, defineAsyncComponent, type HTMLAttributes } from "vue";
import { formatDate } from "@/utils/formatDate";

import type { JobOffer } from "shared/src/offers/offers.types";

import { formatPrice } from "@/utils/formatPrice";
import { createStringFromArr } from "@/utils/createStringFromArr";
import { transformTimeUnitType } from "@/utils/apiCodesTransform";

import { Button, buttonVariants } from "@/components/ui/button/Button.variants";
import { Card } from "@/components/ui/card";

import Text from "@/components/common/text/Text.vue";
import OffersIconValueBox from "@/components/views/offers/single/OffersIconValueBox.vue";
import OfferBadges from "@/components/views/offers/single/OfferBadges.vue";

import { ArrowRight, Building2, Calendar, HardDrive, Info, MapPin } from "lucide-vue-next";
import Title from "@/components/common/title/Title.vue";

const OffersDetailsDialog = defineAsyncComponent(() => import("@/components/views/offers/single/OffersDetailsDialog.vue"));

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

const workCities = computed(() => createStringFromArr(offer?.workplaces?.slice(0, 6).map(place => place.city)));
const formattedExpirationDate = computed(() => formatDate(offer?.expirationDate));
const formattedCreationDate = computed(() => formatDate(offer?.createdAt));
</script>

<template>
  <Card
    class="flex flex-col gap-2 p-3 transition-shadow transition-transform hover:z-30 hover:translate-y-[-2px] hover:shadow-xl"
    :aria-label="`Otwórz szczegóły ogłoszenia: ${offer?.positionName ?? ''}`"
  >
    <div class="flex flex-col justify-between self-stretch md:flex-row">
      <div class="flex gap-2 self-stretch">
        <!--        <img-->
        <!--          :src="offer?.company?.logoUrl ?? ''"-->
        <!--          :alt="`Logo firmy ${offer?.company?.name}`"-->
        <!--          loading="lazy"-->
        <!--          height="96"-->
        <!--          width="96"-->
        <!--          class="aspect-square max-h-[96px] rounded-md bg-white object-contain p-2"-->
        <!--        />-->

        <div class="flex flex-col">
          <Title order="h3" class="text-foreground line-clamp-1 text-lg font-bold lg:max-w-[100%]"> {{ offer?.positionName }}</Title>
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="workCities" />
          <OffersIconValueBox :icon="Calendar" :value="`Dodano: ${formattedCreationDate}`" />
          <OffersIconValueBox :icon="Calendar" :value="`Koniec: ${formattedExpirationDate}`" />
          <OffersIconValueBox :icon="HardDrive" :value="offer?.dataSourceCode" value-class="font-bold uppercase" />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-2 max-md:mt-2 md:items-end">
        <div class="flex flex-col flex-nowrap items-end justify-between gap-2">
          <OfferBadges
            class-name="flex-row w-full max-md:flex-wrap justify-end"
            :position-levels="offer?.positionLevels"
            :work-modes="offer?.workModes"
            :contract-types="offer?.contractTypes"
          />
          <Text color="primary" align="right" size="lg" weight="bold" class="md:mb-2">
            {{ salaryRangeString ?? "Nie podano widełek" }}
          </Text>
        </div>
        <div class="flex grow items-center gap-2 self-end max-md:w-full">
          <OffersDetailsDialog :offer="offer" :salary-text="salaryRangeString ?? 'Nie podano widełek'">
            <Button variant="secondary">
              Szczegóły
              <Info class="ml-2 h-4 w-4" />
            </Button>
          </OffersDetailsDialog>
          <a
            :href="offer?.offerUrls?.[0]"
            target="_blank"
            rel="nofollow, noopener,noreferrer"
            :class="buttonVariants({ className: 'max-md:w-full' })"
          >
            Przejdź do oferty
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </Card>
</template>
