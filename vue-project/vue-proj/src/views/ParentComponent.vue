<template>
    <button type="button" v-on:click="checkChild">
        자식 컴포넌트 데이터조회
    </button>
    <child-component ref="child_component"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
    components: {
        ChildComponent,
    },
    computed: {
        msg() {
            return this.$refs.child_component.msg
        },
    },
    methods: {
        checkChild() {
            alert(this.msg)
        },
    },
}
</script>
