<script setup lang="ts">
import { Search } from "lucide-vue-next";
import InputControlled from "@/components/common/form/inputs-controlled/InputControlled.vue";
</script>

<template>
  <InputControlled name="search" label="Szukaj" label-sr-only :icon="Search" type="search" placeholder="Szukaj.." />
</template>
