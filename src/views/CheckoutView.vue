<template>
  <div class="checkout-view">
    <div class="container">
      <h1 class="page-title">Pokladňa</h1>

      <div v-if="orderComplete" class="order-success">
        <div class="success-icon">✓</div>
        <h2>Objednávka úspešne vytvorená!</h2>
        <p>
          Číslo objednávky: <strong>{{ completedOrder?.id }}</strong>
        </p>
        <p>
          Celková suma:
          <strong>{{ formatPrice(completedOrder?.total || 0) }}</strong>
        </p>
        <p class="success-message">
          Ďakujeme za vašu objednávku. Potvrdenie sme vám odoslali na email.
        </p>
        <div class="success-actions">
          <router-link to="/products" class="btn btn-primary btn-lg">
            Pokračovať v nákupe
          </router-link>
          <router-link to="/" class="btn btn-secondary btn-lg">
            Späť na domov
          </router-link>
        </div>
      </div>

      <div v-else-if="cartStore.items.length === 0" class="empty-checkout">
        <h2>Košík je prázdny</h2>
        <p>Pridajte produkty do košíka pred dokončením objednávky.</p>
        <router-link to="/products" class="btn btn-primary btn-lg">
          Zobraziť produkty
        </router-link>
      </div>

      <form v-else @submit.prevent="handleCheckout" class="checkout-form">
        <div class="form-sections">
          <section class="form-section">
            <h2 class="section-title">Dodacie údaje</h2>

            <div class="form-grid">
              <div class="form-group">
                <label for="firstName">Meno *</label>
                <input
                  id="firstName"
                  v-model="formData.firstName"
                  type="text"
                  required
                  placeholder="Ján"
                />
              </div>
              <div class="form-group">
                <label for="lastName">Priezvisko *</label>
                <input
                  id="lastName"
                  v-model="formData.lastName"
                  type="text"
                  required
                  placeholder="Novák"
                />
              </div>
              <div class="form-group full-width">
                <label for="email">Email *</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="jan.novak@example.com"
                />
              </div>
              <div class="form-group full-width">
                <label for="phone">Telefón *</label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  required
                  placeholder="+421 900 000 000"
                />
              </div>
              <div class="form-group full-width">
                <label for="address">Adresa *</label>
                <input
                  id="address"
                  v-model="formData.address"
                  type="text"
                  required
                  placeholder="Hlavná 1"
                />
              </div>
              <div class="form-group">
                <label for="city">Mesto *</label>
                <input
                  id="city"
                  v-model="formData.city"
                  type="text"
                  required
                  placeholder="Bratislava"
                />
              </div>
              <div class="form-group">
                <label for="zipCode">PSČ *</label>
                <input
                  id="zipCode"
                  v-model="formData.zipCode"
                  type="text"
                  required
                  placeholder="811 01"
                />
              </div>
            </div>
          </section>

          <section class="form-section">
            <h2 class="section-title">Spôsob platby</h2>
            <div class="payment-methods">
              <label class="payment-option">
                <input
                  type="radio"
                  v-model="formData.paymentMethod"
                  value="card"
                  required
                />
                <div class="payment-option-content">
                  <span class="payment-icon">💳</span>
                  <span>Platobná karta</span>
                </div>
              </label>
              <label class="payment-option">
                <input
                  type="radio"
                  v-model="formData.paymentMethod"
                  value="transfer"
                  required
                />
                <div class="payment-option-content">
                  <span class="payment-icon">🏦</span>
                  <span>Bankový prevod</span>
                </div>
              </label>
              <label class="payment-option">
                <input
                  type="radio"
                  v-model="formData.paymentMethod"
                  value="cash"
                  required
                />
                <div class="payment-option-content">
                  <span class="payment-icon">💵</span>
                  <span>Dobierka</span>
                </div>
              </label>
            </div>
          </section>

          <section class="form-section">
            <h2 class="section-title">Poznámka</h2>
            <textarea
              class="area-form"
              v-model="formData.note"
              placeholder="Poznámky k objednávke (nepovinné)"
              rows="4"
            ></textarea>
          </section>
        </div>

        <aside class="order-summary">
          <div class="summary-card card">
            <h2 class="summary-title">Vaša objednávka</h2>
            <div class="order-items">
              <div
                v-for="item in cartStore.items"
                :key="item.product.id"
                class="order-item"
              >
                <div class="order-item-image">
                  <img :src="item.product.image" :alt="item.product.name" />
                </div>
                <div class="order-item-details">
                  <h4>{{ item.product.name }}</h4>
                  <p>
                    {{ item.quantity }}x {{ formatPrice(item.product.price) }}
                  </p>
                </div>
                <div class="order-item-price">
                  {{ formatPrice(item.product.price * item.quantity) }}
                </div>
              </div>
            </div>

            <div class="summary-totals">
              <div class="summary-row">
                <span>Medzisúčet:</span>
                <span>{{ formatPrice(subtotal) }}</span>
              </div>
              <div class="summary-row">
                <span>Doprava:</span>
                <span>{{ shippingText }}</span>
              </div>
              <div class="summary-row">
                <span>DPH (20%):</span>
                <span>{{ formatPrice(tax) }}</span>
              </div>
              <div class="summary-divider"></div>
              <div class="summary-row total-row">
                <span>Celkom:</span>
                <span class="total-value">{{ formatPrice(total) }}</span>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg submit-btn">
              Dokončiť objednávku
            </button>
          </div>
        </aside>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import type { Order } from "@/types";
import "@/assets/styles/views/CheckoutView.css";

export default defineComponent({
  name: "CheckoutView",
  data() {
    return {
      orderComplete: false,
      completedOrder: null as Order | null,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        paymentMethod: "card",
        note: "",
      },
    };
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
    shippingText() {
      return this.shipping === 0 ? "Zadarmo" : this.formatPrice(this.shipping);
    },
  },
  methods: {
    formatPrice(price: number) {
      return `${price.toFixed(2)} €`;
    },
    handleCheckout() {
      const order = this.cartStore.checkout();
      this.completedOrder = order;
      this.orderComplete = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>
