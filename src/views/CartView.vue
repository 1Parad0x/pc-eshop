<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="page-title">Nákupný košík</h1>

      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Váš košík je prázdny</h2>
        <p>Pridajte produkty do košíka a zobrazte ich tu.</p>
        <router-link to="/products" class="btn btn-primary btn-lg">
          Pokračovať v nákupe
        </router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items">
          <CartItem
            v-for="item in cartStore.items"
            :key="item.product.id"
            :item="item"
          />
        </div>

        <div class="cart-summary">
          <div class="summary-card card">
            <h2 class="summary-title">Súhrn objednávky</h2>

            <div class="summary-row">
              <span class="summary-label"
                >Produkty ({{ cartStore.itemsCount }}):</span
              >
              <span class="summary-value">{{ formattedSubtotal }}</span>
            </div>

            <div class="summary-row">
              <span class="summary-label">Doprava:</span>
              <span class="summary-value">{{ formattedShipping }}</span>
            </div>

            <div class="summary-row">
              <span class="summary-label">DPH (20%):</span>
              <span class="summary-value">{{ formattedTax }}</span>
            </div>

            <div class="summary-divider"></div>

            <div class="summary-row total-row">
              <span class="summary-label">Celkom:</span>
              <span class="summary-value total-value">{{
                formattedTotal
              }}</span>
            </div>

            <div class="summary-actions">
              <router-link to="/checkout" class="buy-btn">
                Pokračovať k pokladni
              </router-link>
              <button class="btn btn-secondary" @click="handleClearCart">
                Vyprázdniť košík
              </button>
            </div>

            <div class="summary-info">
              <p>✓ Bezpečné platby</p>
              <p>✓ Doprava do 24 hodín</p>
              <p>✓ 14 dní na vrátenie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import CartItem from "@/components/CartItem.vue";
import "@/assets/styles/views/CartView.css";

export default defineComponent({
  name: "CartView",
  components: {
    CartItem,
  },
  computed: {
    cartStore() {
      return useCartStore();
    },
    subtotal() {
      return this.cartStore.totalPrice;
    },
    shipping() {
      return this.subtotal > 500 ? 0 : 9.99;
    },
    tax() {
      return this.subtotal * 0.2;
    },
    total() {
      return this.subtotal + this.shipping + this.tax;
    },
    formattedSubtotal() {
      return `${this.subtotal.toFixed(2)} €`;
    },
    formattedShipping() {
      return this.shipping === 0 ? "Zadarmo" : `${this.shipping.toFixed(2)} €`;
    },
    formattedTax() {
      return `${this.tax.toFixed(2)} €`;
    },
    formattedTotal() {
      return `${this.total.toFixed(2)} €`;
    },
  },
  methods: {
    handleClearCart() {
      this.cartStore.clearCart();
    },
  },
});
</script>
