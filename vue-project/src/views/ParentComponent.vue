<template>
  <h3>부모컴포넌트(ParentComponent.vue)</h3>
  <p class="parent-component">{{ msg }}</p>
  <ChildComponent v-on:send-message="sendMessage" ref="child_comp" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "홍길동",
    };
  },
  components: { ChildComponent },
  methods: {
    sendMessage(data) {
      console.log("전달받은 데이터: " + data);
    },
  },
};
</script>
