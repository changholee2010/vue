<template>
    <h1>{{ title + ' ' + msg }}</h1>
</template>

<script>
import { inject } from 'vue'
export default {
    setup() {
        const title1 = inject('title')
        console.log(title1)
        return { title: title1, msg: 'hello' }
    },
}
</script>
