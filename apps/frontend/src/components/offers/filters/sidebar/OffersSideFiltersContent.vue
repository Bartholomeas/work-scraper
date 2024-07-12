<script setup lang="ts">
import { useGetOffersBaseCategories } from "@/api/offers/getOffersBaseCategories";
import OffersSidebarButtons from "@/components/offers/filters/sidebar/OffersSidebarButtons.vue";
import { watch } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { parseZodSchemaToInputNames } from "@/lib/zod/parseZodSchemaToInputNames";
import { z } from "zod";
import CheckboxControlled from "@/components/common/form/inputs-controlled/CheckboxControlled.vue";

const { data } = useGetOffersBaseCategories();
watch(
  () => data.value,
  categories => {
    if (categories)
      for (let cat of Object.values(categories)) {
        console.log("Xdd", cat);
      }
  },
);

const testSchema = z.object({
  items: z.array(z.string()),
});
const typedBaseCategoriesSchema = toTypedSchema(testSchema);
const inputNames = parseZodSchemaToInputNames(testSchema);

const { handleSubmit } = useForm({
  validationSchema: testSchema,
});

const onSubmit = handleSubmit(values => {
  console.log("Submit filtrow: ", values);
});
</script>
<template>
  <aside class="w-full h-full p-3">
    <form @submit="onSubmit" class="flex flex-col gap-4">
      <CheckboxControlled label="Poziom" :name="inputNames.items" />
      <div v-if="data" v-for="category in Object.values(data)" :key="`categoryBox-${category.name}`">
        {{ category.name }}
        <div v-for="catValue in category.items" :key="`categoryValue-${catValue.id}`">
          {{ catValue.value }}
        </div>
      </div>
      <OffersSidebarButtons />
    </form>
  </aside>
</template>
