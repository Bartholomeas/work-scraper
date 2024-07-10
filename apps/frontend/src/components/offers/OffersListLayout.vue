<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <slot name="top-bar" />
    <div class="flex flex-row gap-2">
      <aside class="w-0 lg:w-1/4">
        <slot name="filters" />
      </aside>
      <slot class="w-full lg:w-3/4" />
    </div>
    <slot name="pagination" class="self-center mx-auto" />
  </div>
</template>
