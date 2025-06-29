<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="i" v-for="(product, i) in productList">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '../api.js'
export default {
    mixins: [ApiMixin],
    data() {
        return {
            productList: [],
        }
    },
    async mounted() {
        this.productList = await this.$callAPI(
            'https://17947b28-0980-4751-b240-55a156c0b85b.mock.pstmn.io/test',
            'get'
        )
        console.log(this.productList)
    },
}
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>
