<template>
  <div class="pagination">
    <button
        class="pagination__button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
    >
      &lt;
    </button>
    <button
        v-for="page in totalPages"
        :key="page"
        class="pagination__button"
        :class="{ 'pagination__button--active': currentPage === page }"
        @click="changePage(page)"
    >
      {{ page }}
    </button>
    <button
        class="pagination__button"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
    >
      &gt;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const currentPage = ref(props.modelValue);

watch(currentPage, (newVal) => {
  emit('update:modelValue', newVal);
});

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    currentPage.value = page;
  }
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  &__button {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    &--active {
      background-color: #000;
      color: #fff;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f0f0f0;
      color: #ccc;
    }
  }
}
</style>
