<script setup lang="ts">
import { computed, inject } from "vue";
import { useGetWorkplaces } from "@/api/offers/getWorkplaces";
import ComboboxControlled from "@/components/common/form/inputs-controlled/ComboboxControlled.vue";

interface OffersSideWorkplaceSelectProps {
  name: string;
}

const { data } = useGetWorkplaces();

const comboboxData = computed(() =>
  data?.value
    ? [
        {
          id: "a1c1a0c3-0707-4d8e-91d4-9e5dfdd13a12",
          label: "Cała Polska",
          value: "",
        },
        ...data?.value?.map(place => ({
          id: place.id,
          label: `${place.value?.charAt(0).toUpperCase()}${place?.value.substring(1)} (${place.count})`,
          value: place.value,
        })),
      ]
    : [],
);

const props = defineProps<OffersSideWorkplaceSelectProps>();

const setFieldValue = inject("setFieldValue") as (name: string, value: string) => void;
setFieldValue(props.name, "");
</script>

<template>
  <ComboboxControlled :items="comboboxData" :name="props.name" label="Wybierz lokalizację" command-placeholder="Wyszukaj lokalizację.." />
</template>
