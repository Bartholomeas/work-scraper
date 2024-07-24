<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

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

const route = useRoute();
const currentPage = computed(() => (route?.query?.page ? +route?.query?.page : 1));

const { meta } = defineProps<OffersPaginationProps>();
const { submitFilters } = useFilters({
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
    :items-per-page="meta?.perPage ?? 48"
    :sibling-count="1"
    :default-page="1"
    show-edges
    :page="currentPage"
    class="max-w-screen mx-auto overflow-hidden"
  >
    <PaginationList v-slot="{ items }" class="flex flex-wrap items-center gap-1">
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
