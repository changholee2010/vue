<template>
    <ProvideIndectChild />
</template>

<script>
import ProvideIndectChild from './ProvideInjectChild.vue'

export default {
    data() {
        return {
            items: ['A', 'B'],
        }
    },
    components: {
        ProvideIndectChild,
    },
    provide() {
        return {
            itemLength: this.items.length,
        }
    },
}
</script>
