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
        msg: ''
      }
    },
    methods: {
      childFunc() {
        console.log('부모컴포넌트에서 직접 발생시킨 이벤트.')
      },
      callFromParent() {
        console.log('부모컴포넌트에서 직접 발생시킨 함수.')
      }
    }
  }
</script>