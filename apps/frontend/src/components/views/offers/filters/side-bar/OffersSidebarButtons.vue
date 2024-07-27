<script setup lang="ts">
import { Button } from "@/components/ui/button/Button.variants";
import { useForm } from "vee-validate";

interface OffersSidebarButtonsProps {
  clearFilters: () => void;
  resetForm?: ReturnType<typeof useForm>["resetForm"];
  defaultInitValues?: Record<string, unknown>;
}

const props = defineProps<OffersSidebarButtonsProps>();

const handleClearFilters = () => {
  props.resetForm?.({
    values: props.defaultInitValues,
  });
  props.clearFilters();
};
</script>

<template>
  <div class="bg-background sticky bottom-0 flex w-full flex-col gap-2 pb-2 pt-4 max-lg:pb-4">
    <Button type="submit" variant="default">Zastosuj</Button>
    <Button :type="'button'" @click="handleClearFilters" variant="outline">Wyczyść filtry</Button>
  </div>
</template>
