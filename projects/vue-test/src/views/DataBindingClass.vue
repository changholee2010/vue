<template>
  <div>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
      Class Binding1
    </div><br>
    <div class="container" v-bind:class="[activeClass, errorClass]">
      Class Binding2
    </div><br>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true,
        hasError: false,
        activeClass: 'active',
        errorClass: 'text-red',
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100px;
  }

  .active {
    background-color: yellow;
    font-weight: bold;
  }

  .text-red {
    color: red;
  }
</style>