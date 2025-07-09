<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="환영합니다!!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"; // 하위component import.

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
