<template>
  <div class="about">
    <button type="button" v-on:click="childFunc" ref="btn">자식컴포넌트 데이터 변경</button>
    <h3>message: {{msg}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '초기 메세지.'
      }
    },
    methods: {
      childFunc() {
        this.msg = '변경된 메세지.'
      }
    }
  }
</script>