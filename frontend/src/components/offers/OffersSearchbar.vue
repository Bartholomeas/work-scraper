<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
</script>

<template>
  <form>
    <Input :icon="Search" type="search" placeholder="Szukaj.." />
  </form>
</template>

<style scoped></style>
