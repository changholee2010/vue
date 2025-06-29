<template>
    <h1>Hello, {{ title }}</h1>
    <p>Welcome to the Vue.js Data Binding example.</p>
    <h3>{{ htmlString }}</h3>
    <h3 v-html="htmlString"></h3>
    <p><input type="text" v-model="valueModel"></p>
    <p><input type="number" v-model.number="numberValue"></p>
    <p><textarea v-model="message"></textarea></p>
    <p>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="052">부산</option>
            <option value="064">제주</option>
        </select>
    </p>
    <p>
        <label> {{ checked }} </label>
        <input type="checkbox" true-value="yes" false-value="no" v-model="checked" />
    </p>
    {{ valueModel }}, {{ numberValue }}, {{ message }}, {{ city }}

</template>

<script>
    export default {
        data() {
            return {
                title: 'World',
                htmlString: '<span style="color: red;">This is a red text.</span>',
                valueModel: 'Something Else...',
                numberValue: 0,
                message: 'Type something here...',
                city: '064',
                checked: true
            }
        }
    }
</script>