<template>
  <div class="article-detail" v-if="article">
    <h2 class="article-detail__title">{{ article.title }}</h2>
    <img :src="imageSrc" alt="Article Image" class="article-detail__img">
    <span class="article-detail__subtitle">About</span>
    <p class="article-detail__desc">{{ article.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const article = ref(null);
const imageSrc = ref('');
const placeholder = 'https://via.placeholder.com/800x400';

const fetchArticle = async () => {
  try {
    const response = await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    article.value = await response.json();
    const src = await preloadImage(article.value.image);
    imageSrc.value = src;
  } catch (error) {
    console.error('Error fetching article:', error);
    imageSrc.value = placeholder;
  }
};

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(src);
  });
};

onMounted(fetchArticle);
</script>

<style lang="scss" scoped>
.article-detail {
  display: flex;
  flex-direction: column;
  padding: 0 112px 80px;
  &__title {
    font-family: 'TT Commons', sans-serif;
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    text-align: left;
    margin-bottom: 70px;
  }
  &__img {
    margin-bottom: 80px;
    width: 100%;
    height: auto;
  }
  &__subtitle {
    margin-bottom: 32px;
    font-family: 'TT Commons', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
  }
  &__desc {
    max-width: 60%;
    font-family: 'TT Commons', sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.24;
    text-align: left;
  }
}
</style>
