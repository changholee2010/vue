<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/data">Data link</router-link>
  </nav>
  <router-view />

  <div class="appUse" v-if="appUse">
    <div>
      <h3>App.vue(부모컴포넌트 - Provider)</h3>
      <p>
        제공자이름: <strong>{{ username }}</strong>
      </p>
      <MiddleComponent />
    </div>
  </div>

  <div v-if="appUse">
    <h1>🛍 Vue Provide/Inject 장바구니 예제</h1>
    <ProductList />
    <CartView />
  </div>
</template>

<script>
import MiddleComponent from "./views/MiddleComponent.vue";
import ProductList from "./components/ProductList.vue";
import CartView from "./components/CartView.vue";

export default {
  components: { MiddleComponent, ProductList, CartView },
  data() {
    return {
      msg: "",
      appUse: false,
      username: "홍길동",
      cart: [],
    };
  },
  provide() {
    // 제공하는 값, 함수.
    return {
      providerUsername: this.username, // 데이터 속성.
      updateUserName: this.changeUserName, // 메소드.
      cart: this.cart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    };
  },
  methods: {
    changeUserName(name) {
      this.username = name;
    },
    addToCart(product) {
      const existing = this.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty++;
      } else {
        this.cart.push({ ...product, qty: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
