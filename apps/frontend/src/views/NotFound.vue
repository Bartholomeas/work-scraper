<script setup lang="ts">
import { PAGE_NAME } from "@/constants";
import { useTitle } from "@vueuse/core";

import Button from "@/components/ui/button/Button.vue";
import Text from "@/components/common/text/Text.vue";

const title = useTitle();
title.value = `Nie znaleziono strony | ${PAGE_NAME}`;
</script>

<template>
  <div class="flex h-full w-full flex-col items-center">
    <img src="../assets/404.webp" alt="" />
    <Text as="p" size="xl" color="primary" weight="bold" class="pb-6">Wygląda na to, że zabłądziłeś!</Text>
    <RouterLink to="/">
      <Button variant="default" class="h-12 w-full font-bold uppercase"> Wróć do strony głównej </Button>
    </RouterLink>
  </div>
</template>
