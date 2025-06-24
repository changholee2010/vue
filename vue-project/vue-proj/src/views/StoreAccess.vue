<template>
    <p>Count: {{ count }}</p>
    <p>CartCnt: {{ cartCount }}</p>
    <button type="button" v-on:click="increment">Increment</button>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
        cartCount() {
            return this.$store.getters.cartCount
        },
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
    },
}
</script>
