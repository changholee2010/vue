<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="name" v-pin="pos" />
    <input type="text" v-model="age" v-focus />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "hong",
        age: 20,
        pos: {
          top: 50,
          left: 100
        }
      }
    },
    directives: {
      focus: {
        mounted(el) {
          el.focus();
        }
      },
      pin: {
        mounted(el, binding) {
          el.style.position = 'fixed';
          el.style.top = binding.value.top + 'px';
          el.style.left = binding.value.left + 'px';
        }
      }
    }
  }
</script>