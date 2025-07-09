<template>
  <h3>자식컴포넌트(ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage" ref="sendBtn">메세지보내기</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("send-message", this.msg);
      // this.$parent.msg = this.msg;
      // this.$root.msg = this.msg;
    },
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>
