<template>
  <CompositionAPIInject />
</template>


<script>
  import {
    provide
  } from 'vue';

  import CompositionAPIInject from '../components/CompositionAPIInject.vue';

  export default {
    name: 'calculatorApi',
    components: {
      CompositionAPIInject
    },
    setup() {
      provide('title', 'Vue.js Project');
    }
  }
</script>