<script setup lang="ts" generic="T extends ZodSchema">
import { type HTMLAttributes, provide } from "vue";
import { z, ZodSchema } from "zod";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { useWindowScroll } from "@vueuse/core";

import { useFilters } from "@/composables/useFilters/useFilters";

interface FiltersWrapperProps<TSchema extends ZodSchema> {
  filterKeys?: string[];
  filtersSchema: TSchema;
  initialValues?: z.infer<TSchema>;
  withAutoSubmit?: boolean;
  className?: HTMLAttributes["class"];
  style?: HTMLAttributes["style"];
}

const { filtersSchema, initialValues, className, style } = withDefaults(defineProps<FiltersWrapperProps<T>>(), {
  withAutoSubmit: false,
});
const { y } = useWindowScroll({
  behavior: "smooth",
});

const { handleSubmit, values, setFieldValue, resetForm } = useForm({
  validationSchema: toTypedSchema(filtersSchema),
  initialValues,
});

const { submitFilters, clearFiltersParams } = useFilters();

const clearFilters = () => {
  clearFiltersParams(() => {
    resetForm();
  });
};

const onSubmit = handleSubmit(values => {
  submitFilters(values);
});

provide("formValues", values);
provide("setFieldValue", setFieldValue);
provide("onSubmit", onSubmit);

defineExpose({
  clearFilters,
  onSubmit,
  resetForm,
});
</script>

<template>
  <form @submit="onSubmit" :class="className" :style="style">
    <slot :clear-filters="clearFilters" :on-submit="onSubmit" :reset-form="resetForm" />
  </form>
</template>
