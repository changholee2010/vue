import axios from 'axios';

export default {
    methods: {
        async $api(url, method, data) {
            return (await axios({
                    method,
                    url,
                    data
                })
                .catch(e => {
                    console.log(e);
                })
            ).data;
        }
    },
    mounted() {
        console.log('mixins mounted.')
    },
    unmounted() {
        console.log('mixins unmounted.')
    }
}