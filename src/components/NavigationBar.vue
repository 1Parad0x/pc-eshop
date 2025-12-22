<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="logo">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">PC Components</span>
        </router-link>

        <div class="nav-links">
          <router-link to="/" class="nav-link">Domov</router-link>
          <router-link to="/products" class="nav-link">Produkty</router-link>
        </div>

        <div class="nav-actions">
          <router-link to="/cart" class="cart-button">
            <span class="cart-icon">🛒</span>
            <span v-if="cartStore.itemsCount > 0" class="cart-badge">{{
              cartStore.itemsCount
            }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import "@/assets/styles/components/NavigationBar.css";

export default defineComponent({
  name: "NavigationBar",
  computed: {
    cartStore() {
      return useCartStore();
    },
  },
});
</script>
