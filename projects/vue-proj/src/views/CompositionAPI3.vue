<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="state.num1" v-on:keyup="plusNumbers" />
            <span>+</span>
            <input type="text" v-model="state.num2" v-on:keyup="plusNumbers" />
            <span>=</span>
            <span>{{ state.result }}</span>
        </div>
    </div>
</template>

<script>
import { plusCalculator } from '../commons.js'

export default {
    name: 'calculatorVue',
    setup() {
        let { num1, num2, result } = plusCalculator()
        return { num1, num2, result }
    },
}
</script>
