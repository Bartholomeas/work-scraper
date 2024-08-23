<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";

import { Card } from "@/components/ui/card";
import Text from "@/components/common/text/Text.vue";

const currentYear = computed(() => dayjs(Date.now()).get("year"));
</script>

<template>
  <footer class="container py-8">
    <Card class="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-between">
      <Text align="center" color="muted" size="xs" as="span"
        >A może strona pomogła znaleźć pracę?
        <a href="https://buycoffee.to/bartholomeas" target="_blank" class="text-primary font-black">Dorzuć się na utrzymanie! ☕️</a></Text
      >
      <Text color="muted" size="xs">{{ currentYear }} &copy; Bartosz Stefaniak @ ITotyle</Text>
      <Text align="center" color="muted" size="xs"
        >Stworzone przez: <a href="https://bstefaniak.pl" class="text-primary font-bold" target="_blank">Bartosz Stefaniak</a></Text
      >
    </Card>
  </footer>
</template>
