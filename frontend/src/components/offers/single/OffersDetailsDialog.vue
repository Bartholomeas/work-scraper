<script setup lang="ts">
import { Button, buttonVariants } from "@/components/ui/button";
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
import OffersIconValueBox from "@/components/offers/single/OffersIconValueBox.vue";
import { Separator } from "@/components/ui/separator";
import OfferBadges from "@/components/offers/single/OfferBadges.vue";

interface OffersDetailsDialogProps {
  offer: JobOffer;
  salaryText: string;
}

const { offer, salaryText } = defineProps<OffersDetailsDialogProps>();
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader class="flex flex-col items-center">
        <img
          :src="offer?.company?.logoUrl ?? ''"
          :alt="`Logo firmy ${offer?.company?.name}`"
          loading="lazy"
          height="64"
          width="120"
          class="rounded-md object-contain"
        />
        <DialogTitle class="text-center text-[24px]">{{ offer?.positionName }}</DialogTitle>
        <p class="font-bold text-lg text-primary md:mb-2 text-right">{{ salaryText }}</p>
        <div class="flex justify-around gap-2">
          <OffersIconValueBox :icon="Building2" :value="offer?.company?.name" />
          <OffersIconValueBox :icon="MapPin" :value="createStringFromArr(offer?.workplace)" />
          <OffersIconValueBox :icon="Calendar" :value="formatDate(offer?.expirationDate)" />
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
