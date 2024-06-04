<script setup lang="ts">
import { z } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import OffersSearchbar from "@/components/offers/filters/OffersSearchbar.vue";

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
const form = useForm({
  validationSchema: filterOffersSchema,
});

const onSubmit = form.handleSubmit(values => {
  console.log("values", values);
});
</script>

<template>
  <div class="flex">
    <form @submit="onSubmit">
      <OffersSearchbar />
    </form>
  </div>
</template>
