<template>
  <div>
    <h2>📦 상품 목록</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}원
        <button @click="addToCart(product)">장바구니에 추가</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "노트북", price: 1000000 },
        { id: 2, name: "마우스", price: 20000 },
        { id: 3, name: "키보드", price: 50000 },
      ],
    };
  },
  inject: ["addToCart"],
};
</script>
