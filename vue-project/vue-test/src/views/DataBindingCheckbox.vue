<template>
  <div>
    <label>v-model="checked"<input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{checked}}</label><br>
    <label>v-bind:value<input type="checkbox" v-bind:checked="valueCheck">{{valueCheck}}</label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: 'no',
        valueCheck: true
      }
    }
  }
</script>