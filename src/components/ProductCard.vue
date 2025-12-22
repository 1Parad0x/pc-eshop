<template>
  <div class="product-card card">
    <router-link :to="`/products/${product.id}`" class="product-image-link">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
        <div v-if="!product.inStock" class="out-of-stock-overlay">
          <span>Nie je skladom</span>
        </div>
      </div>
    </router-link>

    <div class="product-info">
      <div class="product-header">
        <span class="product-category">{{ categoryName }}</span>
        <div class="product-rating">
          <span class="rating-star">⭐</span>
          <span class="rating-value">{{ product.rating }}</span>
        </div>
      </div>

      <router-link :to="`/products/${product.id}`" class="product-title-link">
        <h3 class="product-title">{{ product.name }}</h3>
      </router-link>

      <p class="product-description">{{ truncatedDescription }}</p>

      <div class="product-footer">
        <div class="product-price">
          <span class="price-label">Cena:</span>
          <span class="price-value">{{ formattedPrice }}</span>
        </div>

        <button
          class="btn btn-primary btn-sm add-to-cart-btn"
          :disabled="!product.inStock || isInCart"
          @click="handleAddToCart"
        >
          <span v-if="isInCart">✓</span>
          <span v-else-if="!product.inStock">Nedostupné</span>
          <span v-else>🛒</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Product } from "@/types";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import "@/assets/styles/components/ProductCard.css";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    cartStore() {
      return useCartStore();
    },
    productsStore() {
      return useProductsStore();
    },
    formattedPrice() {
      return `${this.product.price.toFixed(2)} €`;
    },
    truncatedDescription() {
      if (this.product.description.length > 100) {
        return this.product.description.substring(0, 100) + "...";
      }
      return this.product.description;
    },
    isInCart() {
      return this.cartStore.isInCart(this.product.id);
    },
    categoryName() {
      const category = this.productsStore.categories.find(
        (cat) => cat.id === this.product.category,
      );
      return category ? category.name : this.product.category;
    },
  },
  methods: {
    handleAddToCart() {
      if (this.product.inStock && !this.isInCart) {
        this.cartStore.addToCart(this.product);
      }
    },
  },
});
</script>
