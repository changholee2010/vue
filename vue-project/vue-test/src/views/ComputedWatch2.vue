<template>
  <h1>Full Name: {{fullName}}</h1>
  <button type="button" @click="changeName">변경</button>
</template>

<script>
  export default {
    data() {
      return {
        firstName: "Kildong",
        lastName: "Hong",
        fullName: ''
      }
    },
    watch: {
      firstName(item, beforeItem) {
        console.log(item, ' ', beforeItem)
        this.fullName = this.firstName + ' ' + this.lastName;
      },
      lastName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      },
    },
    methods: {
      changeName() {
        this.firstName = 'Kingkong'
      }
    }
  }
</script>