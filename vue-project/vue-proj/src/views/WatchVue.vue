<template>
    <h1>FullName: {{ fullName }}</h1>
    <button type="button" v-on:click="changeName()">변경</button>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'kildong',
            lastName: 'Hong',
            fullName: '',
        }
    },
    watch: {
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName
        },
        lastName() {
            this.fullName = this.firstName + ' ' + this.lastName
        },
    },
    methods: {
        changeName() {
            this.firstName = 'Koldong'
        },
    },
}
</script>
