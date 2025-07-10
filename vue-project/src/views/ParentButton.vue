<template>
  <h3>ParentButton.vue</h3>
  <MyButton v-on:my-event="eventClick" label="확인" />
  <MyButton @my-event="eventClick" label="취소" />
  <MyButton @my-event="eventClick" />
</template>

<script>
import MyButton from "../components/MyButton.vue";
export default {
  components: { MyButton },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    eventClick(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
</style>
