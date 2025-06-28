import axios from 'axios'
const os = require('os') // from mixins.js

export default {
    methods: {
        async $api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url,
                    data,
                }).catch((e) => {
                    console.log(e)
                })
            ).data
        },
        //실행되는 프로그램을 콘솔에 출력하기.
        printLog() {
            console.log(`from ${__filename}`)
        },
    },
}
