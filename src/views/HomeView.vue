<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Zostavte si <span class="gradient-text">dokonalý</span> počítač
          </h1>
          <p class="hero-description">
            Najlepšie PC komponenty za najlepšie ceny. Procesory, grafické
            karty, RAM pamäte a všetko čo potrebujete!
          </p>
          <div class="hero-actions">
            <router-link to="/products" class="hero-btn">
              <span>Zobraziť produkty</span>
              <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Rýchle dodanie</h3>
            <p class="feature-description">
              Doručenie do 24 hodín pre skladové položky
            </p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon">💰</div>
            <h3 class="feature-title">Najlepšie ceny</h3>
            <p class="feature-description">
              Konkurenčné ceny a pravidelné akcie
            </p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon">🛡️</div>
            <h3 class="feature-title">Záruka</h3>
            <p class="feature-description">
              Rozšírená záruka na všetky komponenty
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Top produkty</h2>
          <router-link to="/products" class="view-all-link">
            Zobraziť všetko →
          </router-link>
        </div>
        <div class="products-grid">
          <ProductCard
            v-for="product in topProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "@/stores/products";
import ProductCard from "@/components/ProductCard.vue";
import "@/assets/styles/views/HomeView.css";

export default defineComponent({
  name: "HomeView",
  components: {
    ProductCard,
  },
  computed: {
    productsStore() {
      return useProductsStore();
    },
    topProducts() {
      return this.productsStore.products
        .filter((p) => p.inStock)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
    },
  },
});
</script>
