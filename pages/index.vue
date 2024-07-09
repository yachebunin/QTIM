<template>
  <div class="app">
    <BlogArticles class="app__articles" />
  </div>
</template>

<script setup lang="ts">
import BlogArticles from '~/components/BlogArticles.vue';
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
