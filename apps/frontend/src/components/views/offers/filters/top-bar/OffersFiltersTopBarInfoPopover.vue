<script setup lang="ts">
import Text from "@/components/common/text/Text.vue";
import Button from "@/components/ui/button/Button.vue";
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import Separator from "@/components/ui/separator/Separator.vue";

import { Info } from "lucide-vue-next";
</script>

<template>
  <Popover>
    <PopoverTrigger class="absolute right-0">
      <Button variant="ghost" size="xs" class="h-12"><Info class="size-5" /></Button>
    </PopoverTrigger>
    <PopoverContent class="p-5">
      <Text weight="bold">Jak korzystać z filtrów? </Text>
      <Separator class="my-2" />
      <Text class="whitespace-pre-wrap">
        Domyślnie wyszukiwarka szuka na podstawie wpisanej frazy. Możesz jednak również wypisać kategorię, które chcesz, aby oferta
        zawierała. Aby wyszukać oferty po kategoriach wpisz je po znaku
        <Text weight="bold" as="span" class="bg-background-lighter rounded-md p-1">";"</Text> na przykład:
        <Text weight="bold" as="span" class="bg-background-lighter w-full whitespace-pre-wrap break-all rounded-md p-1"
          >java developer;java,javascript,sql,spring</Text
        >
        Dzięki temu zapytaniu wyszukasz oferty zawierające w tytule
        <Text weight="bold" as="span" class="bg-background-lighter rounded-md p-1">java developer</Text> oraz z posiadające wszystkie
        wymienione kategorie
        <Text weight="bold" as="span" class="bg-background-lighter rounded-md p-1">java,javascript,sql,spring</Text>
      </Text>
    </PopoverContent>
  </Popover>
</template>
