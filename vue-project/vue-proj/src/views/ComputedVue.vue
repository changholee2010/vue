<template>
    <h1>FullName: {{ fullName }}</h1>
    <h3>FullName: {{ firstName + ' ' + lastName }}</h3>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'kildong',
            lastName: 'Hong',
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        },
    },
}
</script>
