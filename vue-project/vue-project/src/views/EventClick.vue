<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The Counter is : {{counter}}</p>
    <button type="button" @click="one(), two()">Click</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 1
      }
    },
    methods: {
      increaseCounter() {
        this.counter++;
      },
      setCount(counter) { // parameter를 전달하기 위해서 사용.
        this.counter = counter;
      },
      one() {
        alert('one')
      },
      two() {
        alert('two')
      }
    }
  }
</script>