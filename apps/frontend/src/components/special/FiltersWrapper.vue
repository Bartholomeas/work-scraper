<script setup lang="ts" generic="T extends ZodSchema">
import { useFilters } from "@/composables/useFilters/useFilters";
import { type HTMLAttributes, provide } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { z, ZodSchema } from "zod";

interface FiltersWrapperProps<TSchema extends ZodSchema> {
  filterKeys?: string[];
  filtersSchema: TSchema;
  initialValues?: z.infer<TSchema>;
  withAutoSubmit?: boolean;
  className?: HTMLAttributes["class"];
  style?: HTMLAttributes["style"];
}

const { filterKeys, withAutoSubmit, filtersSchema, initialValues, className, style } = withDefaults(defineProps<FiltersWrapperProps<T>>(), {
  withAutoSubmit: false,
});

const { handleSubmit, values, resetForm } = useForm({
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

defineExpose({
  clearFilters,
  onSubmit,
});

provide("formValues", values);
provide("onSubmit", onSubmit);
</script>

<template>
  <form @submit="onSubmit" :class="className" :style="style">
    <slot :clear-filters="clearFilters" :on-submit="onSubmit" />
  </form>
</template>
