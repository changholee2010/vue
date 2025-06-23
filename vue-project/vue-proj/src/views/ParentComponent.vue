<template>
    <button type="button" v-on:click="changeChildData">
        Change child data
    </button>
    <child-component v-on:send-message="sendMessage" ref="child_component" />
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
    methods: {
        changeChildData() {
            this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 Msg'
        },
    },
    components: { ChildComponent },
    mounted() {
        console.log(this.$refs.child_component)
        this.$refs.child_component.callFromParent()
    },
}
</script>
