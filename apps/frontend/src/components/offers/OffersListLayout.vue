<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <slot name="top-bar" />
    <div class="flex flex-row gap-2">
      <slot name="filters" />
      <slot class="w-full lg:w-3/4" />
    </div>
    <slot name="pagination" class="self-center mx-auto" />
  </div>
</template>
