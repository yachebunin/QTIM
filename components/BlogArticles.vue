<template>
  <div class="articles">
    <h2 class="articles__title">Articles</h2>
    <div class="articles__elements">
      <BlogArticle v-for="article in paginatedArticles" :key="article.id" :article="article" />
    </div>
    <Pagination :totalPages="totalPages" v-model="currentPage" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import BlogArticle from "~/components/BlogArticle.vue";
import Pagination from "~/components/Pagination.vue";

const articles = ref([]);
const currentPage = ref(1);
const itemsPerPage = 8;

const totalPages = computed(() => Math.ceil(articles.value.length / itemsPerPage));

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return articles.value.slice(start, end);
});

const fetchArticles = async () => {
  try {
    const response = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
    articles.value = await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

onMounted(fetchArticles);
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 112px;
  &__title {
    font-family: 'TT Commons', sans-serif;
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    text-align: left;
  }
  &__elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}
</style>
