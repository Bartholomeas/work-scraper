<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row gap-0 lg:gap-4">
      <div class="w-0 lg:w-1/4">
        <slot name="filters" />
      </div>
      <div class="flex w-full flex-col gap-4 lg:w-3/4">
        <slot name="top-bar" />
        <slot class="w-full" />
      </div>
    </div>
    <slot name="pagination" class="mx-auto self-center" />
  </div>
</template>
