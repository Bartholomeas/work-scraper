<script setup lang="ts">
import type { OffersPaginationMetadata } from "shared/src/general/query.types";

import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

interface OffersPaginationProps {
  meta: OffersPaginationMetadata | undefined;
}

const { meta } = withDefaults(defineProps<OffersPaginationProps>(), {});

console.log("Pagination", meta, meta?.totalPages);
</script>

<template>
  <Pagination v-slot="{ page }" :total="70" :sibling-count="1" :default-page="1" show-edges>
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <!--      <template v-for="(_, page) in Array.from({ length: meta?.totalPages ?? 50 })" :key="`paginationListItem-${page}`">-->
      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :value="item.value" :key="`paginationListItem-${item.value}`" as-child>
          <Button :variant="item.value === page ? 'default' : 'outline'">{{ item.value }}</Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="`paginationListItem-${item.type}-${index}`" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>
