<template>
  <div class="cart-item">
    <router-link :to="`/products/${item.product.id}`" class="item-image">
      <img :src="item.product.image" :alt="item.product.name" />
    </router-link>
    <div class="item-details">
      <router-link :to="`/products/${item.product.id}`" class="item-title-link">
        <h3 class="item-title">{{ item.product.name }}</h3>
      </router-link>
      <p class="item-category">{{ categoryName }}</p>
      <p class="item-price">{{ formattedPrice }} / ks</p>
    </div>
    <div class="item-quantity">
      <button
        class="quantity-btn"
        @click="decrementQuantity"
        :disabled="item.quantity <= 1"
      >
        -
      </button>
      <input
        type="number"
        class="quantity-input"
        :value="item.quantity"
        @change="handleQuantityChange"
        min="1"
      />
      <button class="quantity-btn" @click="incrementQuantity">+</button>
    </div>
    <div class="item-total">
      <p class="total-label">Spolu:</p>
      <p class="total-price">{{ formattedTotal }}</p>
    </div>
    <button class="remove-btn" @click="removeItem" title="Odstrániť z košíka">
      🗑️
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { CartItem } from "@/types";
import { useCartStore } from "@/stores/cart";
import { useProductsStore } from "@/stores/products";
import "@/assets/styles/components/CartItem.css";

export default defineComponent({
  name: "CartItem",
  props: {
    item: {
      type: Object as () => CartItem,
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
      return `${this.item.product.price.toFixed(2)} €`;
    },
    formattedTotal() {
      return `${(this.item.product.price * this.item.quantity).toFixed(2)} €`;
    },
    categoryName() {
      const category = this.productsStore.categories.find(
        (cat) => cat.id === this.item.product.category,
      );
      return category ? category.name : this.item.product.category;
    },
  },
  methods: {
    incrementQuantity() {
      this.cartStore.incrementQuantity(this.item.product.id);
    },
    decrementQuantity() {
      this.cartStore.decrementQuantity(this.item.product.id);
    },
    handleQuantityChange(event: Event) {
      const target = event.target as HTMLInputElement;
      const value = parseInt(target.value);
      if (!isNaN(value) && value > 0) {
        this.cartStore.updateQuantity(this.item.product.id, value);
      } else {
        target.value = this.item.quantity.toString();
      }
    },
    removeItem() {
      this.cartStore.removeFromCart(this.item.product.id);
    },
  },
});
</script>
