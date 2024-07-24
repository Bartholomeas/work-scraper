<script setup lang="ts">
import { Button } from "@/components/ui/button/Button.variants";

interface OffersSidebarButtonsProps {
  clearFilters: () => void;
}

const { clearFilters } = defineProps<OffersSidebarButtonsProps>();
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <Button type="submit" variant="default">Zastosuj</Button>
    <Button @click="clearFilters" variant="outline">Wyczyść filtry</Button>
  </div>
</template>
