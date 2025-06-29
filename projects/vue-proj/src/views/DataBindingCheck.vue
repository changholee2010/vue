<template>
    <p>
        <label>{{ radio1 }}</label>
        <input type="radio" v-model="radio1" v-bind:value="radio1">
    </p>
</template>

<script>
    export defaut {
        data() {
            return {
                radio1: true,
                radio2: false,
                radio3: false,
            }
        },
    }
</script>