<script setup lang="ts">
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
  totalPages: number;
  currentPage: number;
}

const { totalPages, currentPage } = withDefaults(defineProps<OffersPaginationProps>(), {
  totalPages: 0,
  currentPage: 1,
});
</script>

<template>
  <Pagination>
    <PaginationList>
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(_, page) in Array.from({ length: totalPages })" :key="`paginationListItem-${page}`">
        <PaginationListItem v-if="page" :value="page" as-child>
          <Button>{{ page }}</Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="`paginationListItem-${page}`" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </Pagination>
</template>
