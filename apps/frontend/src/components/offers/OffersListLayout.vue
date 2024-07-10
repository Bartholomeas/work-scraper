<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <slot name="top-bar" />
    <div class="flex flex-row gap-2">
      <aside class="absolute bg-amber-400 left-4 bottom-4 h-6 w-6">
        <slot name="filters" />
      </aside>
      <slot class="w-full" />
    </div>
    <slot name="pagination" class="self-center mx-auto" />
  </div>
</template>
