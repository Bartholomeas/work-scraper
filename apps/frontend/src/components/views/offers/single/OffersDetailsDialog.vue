<script setup lang="ts">
import { computed } from "vue";

import { createStringFromArr } from "@/utils/createStringFromArr";
import { formatDate } from "@/utils/formatDate";

import { Button, buttonVariants } from "@/components/ui/button/Button.variants";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { JobOffer } from "shared/src/offers/offers.types";
import { Separator } from "@/components/ui/separator";
import OfferBadges from "@/components/views/offers/single/OfferBadges.vue";
import OffersIconValueBox from "@/components/views/offers/single/OffersIconValueBox.vue";

import { ArrowRight, Building2, Calendar, MapPin } from "lucide-vue-next";

interface OffersDetailsDialogProps {
  offer: JobOffer;
  salaryText: string;
}

const { offer, salaryText } = defineProps<OffersDetailsDialogProps>();

const workCities = computed(() => createStringFromArr(offer?.workplaces?.map(place => place.city)));
const formattedExpirationDate = computed(() => formatDate(offer?.expirationDate));
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="z-[500] flex max-h-[90dvh] flex-col gap-4 overflow-y-auto">
      <DialogHeader class="flex flex-col">
        <div class="flex gap-4">
          <img
            :src="offer?.company?.logoUrl ?? ''"
            :alt="`Logo firmy ${offer?.company?.name}`"
            loading="lazy"
            height="120"
            width="120"
            class="aspect-square max-h-[120px] rounded-md bg-white object-contain p-2"
          />
          <div class="flex flex-col justify-center gap-1">
            <DialogTitle class="text-left text-[24px]">{{ offer?.positionName }}</DialogTitle>
            <p class="text-primary text-left text-lg font-bold md:mb-2">{{ salaryText }}</p>
          </div>
        </div>
        <Separator class="my-2" />
        <div class="mb-2 flex flex-col gap-2">
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="workCities" />
          <OffersIconValueBox :icon="Calendar" :value="formattedExpirationDate" />
        </div>

        <OfferBadges :position-levels="offer?.positionLevels" :work-modes="offer?.workModes" :contract-types="offer?.contractTypes" />
      </DialogHeader>

      <Separator />
      <DialogDescription>{{ offer?.description }}</DialogDescription>

      <Separator />
      <DialogFooter class="flex flex-nowrap gap-2">
        <DialogClose as-child>
          <Button type="button" variant="secondary">Zamknij</Button>
        </DialogClose>
        <a
          :href="offer?.offerUrls?.[0]"
          target="_blank"
          rel="nofollow, noopener,noreferrer"
          :class="buttonVariants({ className: 'max-md:w-full' })"
        >
          Przejdź do oferty
          <ArrowRight class="ml-2 h-4 w-4" />
        </a>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
