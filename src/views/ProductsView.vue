<template>
  <div class="products-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Všetky produkty</h1>
        <SearchBar />
      </div>

      <div class="products-layout">
        <aside class="sidebar">
          <CategoryFilter />
        </aside>

        <main class="products-main">
          <div
            v-if="productsStore.filteredProducts.length === 0"
            class="no-products"
          >
            <div class="no-products-icon">📦</div>
            <h2>Nenašli sa žiadne produkty</h2>
            <p>Skúste zmeniť filter alebo vyhľadávanie</p>
            <button class="btn btn-primary" @click="clearFilters">
              Vymazať filtre
            </button>
          </div>

          <div v-else class="products-grid">
            <ProductCard
              v-for="product in productsStore.filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "@/stores/products";
import ProductCard from "@/components/ProductCard.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import SearchBar from "@/components/SearchBar.vue";
import "@/assets/styles/views/ProductsView.css";

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductCard,
    CategoryFilter,
    SearchBar,
  },
  computed: {
    productsStore() {
      return useProductsStore();
    },
  },
  methods: {
    clearFilters() {
      this.productsStore.clearFilters();
    },
  },
  mounted() {
    const categoryParam = this.$route.query.category as string;
    if (categoryParam) {
      this.productsStore.setCategory(categoryParam);
    }
  },
});
</script>
