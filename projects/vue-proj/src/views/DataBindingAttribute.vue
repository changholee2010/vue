<template>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
    <div>
        <input type="text" v-model="textValue">
        <button v-bind:disabled="textValue == '' ? true : false" v-on:click="helloEvent">Click</button>
    </div>
    <div class="container" v-bind:class="{ 'active': isActive, 'text-red': hasError }">
        Class Binding
    </div>
    <div class="container" v-bind:class="[activeClass, errorClass]">
        Class Binding with v-bind:class
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgSrc: 'https://vuejs.org/images/logo.png',
                textValue: 'Hello Vue!',
                isActive: true,
                hasError: false,
                activeClass: 'active',
                errorClass: 'text-red'
            }
        },
        methods: {
            helloEvent: function () {
                alert(this.textValue);
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100px;
        border: 1px solid white;
        line-height: 100px;
    }

    .active {
        background-color: #42b983;
        font-weight: bold;
    }

    .text-red {
        color: red;
    }
</style>