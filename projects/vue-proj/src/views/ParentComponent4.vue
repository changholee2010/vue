<template>
    <child-component v-on:send-message="sendMessage" ref="child_component" />
</template>

<script>
import ChildComponent from './ChildComponent4.vue'
export default {
    methods: {
        sendMessage(data) {
            console.log(data)
        },
    },
    components: { ChildComponent },
}
</script>
