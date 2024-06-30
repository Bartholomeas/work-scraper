<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-4">
    <slot name="top-bar" />
    <div class="flex flex-row gap-2">
      <aside>
        <slot name="filters" />
      </aside>
      <slot />
    </div>
    <slot name="pagination" class="self-center mx-auto bg-rose-500" />
  </div>
</template>
