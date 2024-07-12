<script setup lang="ts">
import type { OffersPaginationMetadata } from "shared/src/general/query.types";

import { useFilters } from "@/composables/useFilters/useFilters";

import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button/Button.variants";

interface OffersPaginationProps {
  meta: OffersPaginationMetadata | undefined;
}

const { meta } = defineProps<OffersPaginationProps>();
const { submitFilters, currentParams } = useFilters({
  filterKeys: ["page", "perPage"],
});

const handlePageChange = (page: number = 1) => {
  submitFilters({ page });
};
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="meta?.total ?? 1"
    :items-per-page="meta?.perPage ?? 24"
    :sibling-count="1"
    :default-page="1"
    show-edges
    class="mx-auto max-w-screen overflow-hidden"
  >
    <PaginationList v-slot="{ items }" class="flex items-center flex-wrap gap-1">
      <PaginationPrev :onclick="() => handlePageChange(page - 1)" />

      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :value="item.value" :key="`paginationListItem-${item.value}`" as-child>
          <Button :variant="item.value === page ? 'default' : 'outline'" :onclick="() => handlePageChange(item.value)">
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis v-else :key="`paginationListItem-${item.type}-${index}`" :index="index" />
      </template>

      <PaginationNext :onclick="() => handlePageChange(page + 1)" />
    </PaginationList>
  </Pagination>
</template>
