<script setup lang="ts">
import { useFormField } from "@/components/common/form/useFormField";
import { Slot } from "radix-vue";

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
</script>

<template>
  <Slot
    :id="formItemId"
    :aria-describedby="!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`"
    :aria-invalid="Boolean(error)"
  >
    <slot />
  </Slot>
</template>
