<script setup lang="ts">
import { Search } from "lucide-vue-next";
import InputControlled from "@/components/common/form/inputs-controlled/InputControlled.vue";
import SelectControlled, { type SelectControlledItem } from "@/components/common/form/inputs-controlled/SelectControlled.vue";

const sortItems: SelectControlledItem[] = [
  {
    content: "Wg. popularności",
    value: "popularityAsc",
  },
  {
    content: "Od najnowszych",
    value: "dateDesc",
  },
  {
    content: "Od najstarszych",
    value: "dateAsc",
  },
];
</script>

<template>
  <div class="flex flex-row gap-2 justify-end w-full">
    <InputControlled name="search" label="Szukaj" label-sr-only :icon="Search" type="search" placeholder="Szukaj.." />
    <SelectControlled name="sort" label="Sortuj" label-sr-only :items="sortItems" />
  </div>
</template>
