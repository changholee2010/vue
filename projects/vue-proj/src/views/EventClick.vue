<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add 1</button>
        <button type="button" v-on:click="setCount()">Set</button>
        <p>the counter is : {{ counter }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter + 1
        },
        setCount() {
            this.counter = 7
        },
    },
}
</script>
