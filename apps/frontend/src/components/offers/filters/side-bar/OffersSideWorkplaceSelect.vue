<script setup lang="ts">
import { computed } from "vue";
import { useGetWorkplaces } from "@/api/offers/getWorkplaces";
import ComboboxControlled from "@/components/common/form/inputs-controlled/ComboboxControlled.vue";

interface OffersSideWorkplaceSelectProps {
  name: string;
}

const { data } = useGetWorkplaces();

const comboboxData = computed(() =>
  data?.value
    ? data?.value?.map(place => ({
        id: place.id,
        label: `${place.value?.charAt(0).toUpperCase()}${place?.value.substring(1)} (${place.count})`,
        value: place.value,
      }))
    : [],
);

const props = defineProps<OffersSideWorkplaceSelectProps>();
</script>

<template>
  <ComboboxControlled :items="comboboxData" :name="props.name" label="Wybierz lokalizację" command-placeholder="Wyszukaj lokalizację.." />
</template>
