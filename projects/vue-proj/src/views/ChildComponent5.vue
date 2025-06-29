<template>
    <button type="button" @click="childFunc">자식 컴포넌트 데이터 변경</button>
</template>

<script>
export default {
    data() {
        return {
            msg: 'message',
        }
    },
    methods: {
        childFuc() {
            this.msg = 'changed msg'
        },
    },
}
</script>
