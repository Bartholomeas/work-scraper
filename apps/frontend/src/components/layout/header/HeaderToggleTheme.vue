<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

import { Toggle } from "@/components/ui/toggle";

import { Moon, Sun } from "lucide-vue-next";

let mode = useColorMode();

const isDark = computed(() => mode.value === "dark");

const iconToShow = computed(() => (isDark.value ? Moon : Sun));
const toggleMode = () => (mode.value = isDark.value ? "light" : "dark");
</script>
<template>
  <Toggle>
    <component :is="iconToShow" @click="toggleMode" />
  </Toggle>
</template>

<style scoped></style>
