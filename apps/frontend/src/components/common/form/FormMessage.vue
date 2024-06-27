<script setup lang="ts">
import { useFormField } from "@/components/common/form/useFormField";
import { ErrorMessage } from "vee-validate";
import { toValue } from "vue";

const { name, formMessageId } = useFormField();
</script>

<template>
  <ErrorMessage :id="formMessageId" as="p" :name="toValue(name)" class="text-sm font-medium text-destructive" />
</template>
