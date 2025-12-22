<template>
  <div class="category-filter">
    <h3 class="filter-title">Kategórie</h3>
    <div class="category-list">
      <button
        v-for="category in productsStore.categories"
        :key="category.id"
        class="category-btn"
        :class="{ active: productsStore.selectedCategory === category.id }"
        @click="selectCategory(category.id)"
      >
        <span class="category-icon">{{ category.icon }}</span>
        <span class="category-name">{{ category.name }}</span>
        <span class="category-count">{{ getProductCount(category.id) }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "@/stores/products";
import "@/assets/styles/components/CategoryFilter.css";

export default defineComponent({
  name: "CategoryFilter",
  computed: {
    productsStore() {
      return useProductsStore();
    },
  },
  methods: {
    selectCategory(categoryId: string) {
      this.productsStore.setCategory(categoryId);
    },
    getProductCount(categoryId: string) {
      if (categoryId === "all") {
        return this.productsStore.products.length;
      }
      return this.productsStore.productsByCategory(categoryId).length;
    },
  },
});
</script>
