<template>
  <div class="about">
    <button type="button" v-on:click="childFunc" ref="btn">Click</button>
    <h3>message: {{msg}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '자식으로부터 보내는 메세지.'
      }
    },
    methods: {
      childFunc() {
        this.$emit('send-message', this.msg);
      }
    }
  }
</script>