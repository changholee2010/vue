<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers">
      <span>+</span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers">
      <span>=</span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
  import {
    reactive,
    computed
  } from 'vue';

  export default {
    name: 'calculatorApi',
    setup() {
      let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
      });

      return {
        state
      }
    }
  }
</script>