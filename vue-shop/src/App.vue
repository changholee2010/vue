<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
/*
   File: App.vue
   Content: 루트 컴포넌트/ Header, Footer 레이아웃 적용.
   Created: 이창호.
            Header 수정: 2025.07.11
   Date: 2025.07.10
*/
import Header from "./layouts/HeaderLayout.vue";
import Footer from "./layouts/FooterLayout.vue";

export default {
  components: { Header, Footer },
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
