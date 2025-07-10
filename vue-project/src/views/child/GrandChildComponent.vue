<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue (최하위 - Injector)</h3>
    <p>
      주입받은이름: <strong>{{ providerUsername }}</strong>
    </p>
    <button @click="updateParentName">부모사용이름 변경</button>
  </div>
</template>

<script>
export default {
  inject: ["providerUsername", "updateUserName"],
  methods: {
    updateParentName() {
      this.updateUserName("김길동");
    },
  },
};
</script>

<style scoped>
.grand-child {
  border: 1px solid green;
  padding: 5px;
}
</style>
