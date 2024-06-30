<script setup lang="ts">
import { z } from "zod";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { useFilters } from "@/composables/useFilters";

import OffersSearchbar from "@/components/offers/filters/OffersSearchbar.vue";
// import { offersQueryParameters } from "shared/src/offers/offers.schemas";

const filterOffersSchema = toTypedSchema(
  z.object({
    search: z.string().optional(),
    sort: z.string().optional(),
    categories: z
      .array(z.union([z.literal("javascript"), z.literal("python")]))
      .optional()
      .default([]),
  }),
);

// const filterOffersSchema = toTypedSchema(offersQueryParameters);

const router = useRouter();
const { submitFilters } = useFilters();
const form = useForm({
  validationSchema: filterOffersSchema,
});

const onSubmit = form.handleSubmit(values => {
  submitFilters(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <OffersSearchbar />
  </form>
</template>
