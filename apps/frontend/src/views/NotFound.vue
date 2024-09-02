<script setup lang="ts">
import { PAGE_NAME } from "@/constants";
import { useTitle } from "@vueuse/core";

import Button from "@/components/ui/button/Button.vue";
import Text from "@/components/common/text/Text.vue";

const title = useTitle();
title.value = `Nie znaleziono strony | ${PAGE_NAME}`;
</script>

<template>
  <div class="mt-10 flex flex-col items-center">
    <img src="../assets/404.webp" alt="Robot z kodem błędu 404 - nie znaleziono strony" class="max-w-[350px]" />
    <Text as="p" size="h1" color="default" weight="bold" class="pb-6 text-center">Wygląda na to, że zabłądziłeś!</Text>
    <RouterLink to="/">
      <Button variant="default" class="h-12 font-bold"> Wróć do strony głównej </Button>
    </RouterLink>
  </div>
</template>
