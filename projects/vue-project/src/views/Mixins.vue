<template>
  <div>
    <h1>Mixins</h1>
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
        <tr v-for="(product, i) in productList" v-bind:key="i">
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.delivery_price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ApiMixin from '../api.js'

  export default {
    name: 'mixinApi',
    mixins: [ApiMixin],
    data() {
      return {
        productList: []
      }
    },
    async mounted() {
      this.productList = await this.$callAPI("https://470cd3dc-5467-488d-804c-d927588f20c0.mock.pstmn.io/list",
        "get");
    }
  }
</script>


<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>