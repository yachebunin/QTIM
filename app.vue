<template>
  <div class="app">
    <BlogHeader class="app__header" />
    <NuxtPage />
    <BlogFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import 'assets/styles/reset.scss';

.app {
  &__header {
    margin-bottom: 120px;
  }
  &__articles {
    margin-bottom: 140px;
  }
}
</style>
