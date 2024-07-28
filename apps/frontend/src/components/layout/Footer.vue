<script setup lang="ts">
import { Card } from "@/components/ui/card";
import Text from "@/components/common/text/Text.vue";
</script>

<template>
  <footer class="container py-8">
    <Card class="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-between">
      <Text align="center" color="muted" size="md" as="span"
        >A może strona pomogła znaleźć pracę?
        <a href="https://buycoffee.to/bartholomeas" target="_blank" class="text-primary font-black">Będę wdzięczny za kawę! ☕️</a></Text
      >
      <Text align="center" color="muted" size="md"
        >Stworzone przez: <a href="https://bstefaniak.pl" class="text-primary font-bold" target="_blank">Bartosz Stefaniak</a></Text
      >
    </Card>
  </footer>
</template>
