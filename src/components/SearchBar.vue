<template>
  <div class="search-bar">
    <div class="search-input-wrapper">
      <span class="search-icon">🔍</span>
      <input
        type="text"
        class="search-input"
        placeholder="Hľadať produkty..."
        :value="productsStore.searchQuery"
        @input="handleSearch"
      />
      <button
        v-if="productsStore.searchQuery"
        class="clear-btn"
        @click="clearSearch"
        title="Vymazať hľadanie"
      >
        ✕
      </button>
    </div>
    <p v-if="productsStore.searchQuery" class="search-results-text">
      Nájdených {{ resultsCount }} {{ resultsText }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "@/stores/products";
import "@/assets/styles/components/SearchBar.css";

export default defineComponent({
  name: "SearchBar",
  computed: {
    productsStore() {
      return useProductsStore();
    },
    resultsCount() {
      return this.productsStore.filteredProducts.length;
    },
    resultsText() {
      if (this.resultsCount === 1) return "produkt";
      if (this.resultsCount >= 2 && this.resultsCount <= 4) return "produkty";
      return "produktov";
    },
  },
  methods: {
    handleSearch(event: Event) {
      const target = event.target as HTMLInputElement;
      this.productsStore.setSearchQuery(target.value);
    },
    clearSearch() {
      this.productsStore.setSearchQuery("");
    },
  },
});
</script>
