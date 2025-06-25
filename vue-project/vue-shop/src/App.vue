<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <HeaderComp />
  <router-view />
  <FooterComp />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HeaderComp from "./layouts/HeaderLayout.vue";
import FooterComp from "./layouts/FooterLayout.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HeaderComp,
    FooterComp,
  },
  computed: {
    user() {
      return this.$store.state.user;
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
  margin-top: 60px;
}
</style>
