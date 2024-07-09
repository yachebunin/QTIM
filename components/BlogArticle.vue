<template>
  <div class="article">
    <img :src="imageSrc" alt="Article Image" class="article__img">
    <p class="article__desc">{{ article.preview }}</p>
    <button @click="goToDetailPage(article.id)" class="article__btn">
      Read more
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({ image: '', preview: '', id: null })
  }
});

const router = useRouter();

const imageSrc = ref('');
const placeholder = 'https://via.placeholder.com/300';

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => reject(src);
  });
};

const goToDetailPage = (id) => {
  if (!id) {
    console.error('Invalid article ID');
    return;
  }
  router.push({ path: `/article/${id}` }).catch(err => {
    console.error('Navigation error:', err);
  });
};

const loadImage = async (image) => {
  const src = image || placeholder;
  try {
    const loadedSrc = await preloadImage(src);
    imageSrc.value = loadedSrc;
  } catch (error) {
    console.error('Error loading image:', error);
    imageSrc.value = placeholder;
  }
};

onMounted(() => {
  loadImage(props.article.image);
});

watch(() => props.article.image, (newImage) => {
  loadImage(newImage);
});
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &__img {
    margin-bottom: 24px;
    width: 100%;
    height: auto;
  }
  &__desc {
    margin-bottom: 12px;
    font-family: 'TT Commons', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__btn {
    padding: 0;
    font-family: 'TT Commons', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #E2BEFF;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
    text-decoration: none;
  }
  &__btn:hover {
    color: #C2A1E3;
  }
}
</style>
