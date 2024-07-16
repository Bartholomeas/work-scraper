<script setup lang="ts">
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
import { ArrowRight, Building2, Calendar, MapPin } from "lucide-vue-next";
import { createStringFromArr } from "@/utils/createStringFromArr";
import { formatDate } from "@/utils/formatDate";
import { Separator } from "@/components/ui/separator";
import OfferBadges from "@/components/offers/single/OfferBadges.vue";
import { computed } from "vue";
import OffersIconValueBox from "@/components/offers/single/OffersIconValueBox.vue";

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
    <DialogContent class="flex flex-col gap-4 max-h-[90dvh] z-[500] overflow-y-auto">
      <DialogHeader class="flex flex-col">
        <div class="flex gap-4">
          <img
            :src="offer?.company?.logoUrl ?? ''"
            :alt="`Logo firmy ${offer?.company?.name}`"
            loading="lazy"
            height="120"
            width="120"
            class="aspect-square rounded-md object-contain max-h-[120px] bg-white p-2"
          />
          <div class="flex gap-1 flex-col justify-center">
            <DialogTitle class="text-[24px] text-left">{{ offer?.positionName }}</DialogTitle>
            <p class="font-bold text-lg text-left text-primary md:mb-2">{{ salaryText }}</p>
          </div>
        </div>
        <Separator class="my-2" />
        <div class="flex flex-col gap-2 mb-2">
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="workCities" />
          <OffersIconValueBox :icon="Calendar" :value="formattedExpirationDate" />
        </div>

        <OfferBadges :position-levels="offer?.positionLevels" :work-modes="offer?.workModes" :contract-types="offer?.contractTypes" />
      </DialogHeader>

      <Separator />
      <DialogDescription>{{ offer?.description }}</DialogDescription>

      <Separator />
      <DialogFooter class="flex gap-2 flex-nowrap">
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
          <ArrowRight class="h-4 w-4 ml-2" />
        </a>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
