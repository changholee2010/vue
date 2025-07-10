<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleClick() {
      // $emit을 사용.
      // console.log(this);
      this.$emit("my-event", this.label + "을 전달.");
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
}
</style>
