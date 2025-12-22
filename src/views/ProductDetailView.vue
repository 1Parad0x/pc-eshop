<template>
  <div class="product-detail-view">
    <div class="container">
      <router-link to="/products" class="back-link">
        ← Späť na produkty
      </router-link>

      <div v-if="!product" class="not-found">
        <h1>Produkt nenájdený</h1>
        <p>Požadovaný produkt neexistuje.</p>
        <router-link to="/products" class="btn btn-primary">
          Späť na produkty
        </router-link>
      </div>

      <div v-else class="product-detail">
        <div class="product-images">
          <div class="main-image">
            <img :src="product.image" :alt="product.name" />
          </div>
        </div>

        <div class="product-info-section">
          <div class="product-header">
            <span class="product-category-badge">{{ categoryName }}</span>
            <div class="product-rating">
              <span class="rating-stars">⭐⭐⭐⭐⭐</span>
              <span class="rating-value">{{ product.rating }} / 5.0</span>
            </div>
          </div>

          <h1 class="product-name">{{ product.name }}</h1>

          <p class="product-description">{{ product.description }}</p>

          <div class="product-specs">
            <h3 class="specs-title">Špecifikácie</h3>
            <ul class="specs-list">
              <li
                v-for="(spec, index) in product.specs"
                :key="index"
                class="spec-item"
              >
                <span class="spec-icon">✓</span>
                <span>{{ spec }}</span>
              </li>
            </ul>
          </div>

          <div class="product-purchase">
            <div class="price-section">
              <span class="price-label">Cena</span>
              <span class="price-value">{{ formattedPrice }}</span>
            </div>

            <div class="quantity-selector" v-if="product.inStock">
              <label class="quantity-label">Množstvo:</label>
              <div class="quantity-controls">
                <button class="quantity-btn" @click="decrementQuantity">
                  −
                </button>
                <input
                  type="number"
                  class="quantity-input"
                  v-model.number="quantity"
                  min="1"
                  @input="validateQuantity"
                  value="1"
                />
                <button class="quantity-btn" @click="incrementQuantity">
                  +
                </button>
              </div>
            </div>

            <div class="purchase-actions">
              <button
                class="btn btn-primary btn-lg"
                :disabled="!product.inStock"
                @click="handleAddToCart"
              >
                <span v-if="!product.inStock">Nedostupné</span>
                <span v-else>🛒 Pridať do košíka</span>
              </button>
              <router-link to="/cart" class="btn btn-secondary btn-lg">
                Prejsť do košíka
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <section v-if="relatedProducts.length > 0" class="related-products">
        <h2 class="section-title">Podobné produkty</h2>
        <div class="products-grid">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
import ProductCard from "@/components/ProductCard.vue";
import "@/assets/styles/views/ProductDetailView.css";

export default defineComponent({
  name: "ProductDetailView",
  components: {
    ProductCard,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    productsStore() {
      return useProductsStore();
    },
    cartStore() {
      return useCartStore();
    },
    product() {
      const id = parseInt(this.$route.params.id as string);
      return this.productsStore.getProductById(id);
    },
    formattedPrice() {
      return this.product ? `${this.product.price.toFixed(2)} €` : "";
    },
    categoryName() {
      if (!this.product) return "";
      const category = this.productsStore.categories.find(
        (cat) => cat.id === this.product!.category,
      );
      return category ? category.name : this.product.category;
    },
    relatedProducts() {
      if (!this.product) return [];
      return this.productsStore
        .productsByCategory(this.product.category)
        .filter((p) => p.id !== this.product!.id && p.inStock)
        .slice(0, 4);
    },
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    validateQuantity() {
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    handleAddToCart() {
      if (this.product && this.product.inStock) {
        for (let i = 0; i < this.quantity; i++) {
          this.cartStore.addToCart(this.product);
        }
        this.quantity = 1;
      }
    },
  },
});
</script>
