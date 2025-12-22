<script lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import { useCartStore } from "@/stores/cart";

export default {
  name: "App",
  components: { NavigationBar },

  mounted() {
    const cartStore = useCartStore();
    cartStore.load();
  }
};
</script>

<template>
  <div id="app">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/styles/main.css";
</style>