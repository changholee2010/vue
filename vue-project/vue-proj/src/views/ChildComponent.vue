<template>
    <button type="button" ref="btn">click</button>
    <h1>{{ msg }}</h1>
</template>
<script>
export default {
    data() {
        return {
            msg: '',
        }
    },
    methods: {
        childFunc() {
            console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
        },
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수')
        },
    },
}
</script>
