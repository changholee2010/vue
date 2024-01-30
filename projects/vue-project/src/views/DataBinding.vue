<template>
  <div>
    <h1>Hello, {{title}}!</h1>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel" />
    <input type="number" v-model.number="numberModel" />
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'World',
            htmlString: '<p style="color:red;">This is red string</p>',
            valueModel: 'South Korea',
            numberModel: 3,
            message: '여러줄을 입력할 수\n 있습니다.'
        }
    }
}
</script>