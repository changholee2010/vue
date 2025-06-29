<template>
    <h3>{{ msg }}</h3>
</template>

<script>
export default {
    data() {
        return {
            msg: '자식컴포넌트로부터 온 메세지',
        }
    },
    mounted() {
        this.$emit('send-message', this.msg)
    },
}
</script>
