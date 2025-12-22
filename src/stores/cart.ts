import { defineStore } from "pinia";
import type { Product, CartItem, Order } from "@/types";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
    orders: [] as Order[],
  }),

  getters: {
    itemsCount(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    totalPrice(state) {
      return state.items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      );
    },

    isInCart: (state) => (id: number) => {
      return state.items.some((item) => item.product.id === id);
    },
  },

  actions: {
    getItem(id: number) {
      return this.items.find((item) => item.product.id === id);
    },

    load() {
      const saved = localStorage.getItem("cart");
      if (!saved) return;

      try {
        const data = JSON.parse(saved);
        this.items = data.items || [];
        this.orders = data.orders || [];
      } catch (e) {
        console.error("Error:", e);
      }
    },

    save() {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items: this.items,
          orders: this.orders,
        }),
      );
    },

    addToCart(product: Product) {
      const item = this.getItem(product.id);

      if (item) item.quantity++;
      else this.items.push({ product, quantity: 1 });

      this.save();
    },

    updateQuantity(id: number, quantity: number) {
      const item = this.getItem(id);
      if (!item) return;

      if (quantity <= 0) {
        this.removeFromCart(id);
        return;
      }

      item.quantity = quantity;
      this.save();
    },

    incrementQuantity(id: number) {
      const item = this.getItem(id);
      if (item) {
        item.quantity++;
        this.save();
      }
    },

    decrementQuantity(id: number) {
      const item = this.getItem(id);
      if (item) {
        this.updateQuantity(id, item.quantity - 1);
      }
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.product.id !== id);
      this.save();
    },

    clearCart() {
      this.items = [];
      this.save();
    },

    checkout() {
      const order: Order = {
        id: `ORD-${Date.now()}`,
        items: this.items.map((i) => ({
          product: { ...i.product },
          quantity: i.quantity,
        })),
        total: this.totalPrice,
        date: new Date().toISOString(),
      };

      this.orders.push(order);
      this.clearCart();
      this.save();

      return order;
    },
  },
});
