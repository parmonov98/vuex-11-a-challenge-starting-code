<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      isLoggedIn: false,
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },

    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.qty -= prodData.qty;
      this.cart.total -= prodData.price * prodData.qty;
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.route-enter-from,
.route-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-out;
  transform: translateX(0%);
}

.route-leave-active {
  transition: all 0.3s ease-out;
  transform: translateX(0%);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(-100%);
}
</style>