Vue.component('app-component', {
    props: ['msg'],
    template: `
    <div class="app">
        {{ msg }}
    </div>
    `
})

var vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello, World!'
    },
    computed: {
        welcomeMsg: function () {
            return "Welcome msg => " + this.message;
        }
    }
})