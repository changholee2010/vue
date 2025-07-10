<template>
  <div>
    <h2>🛒 장바구니</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} ({{ item.qty }}개)
        <button @click="removeFromCart(item.id)">삭제</button>
      </li>
    </ul>
    <p v-if="!cart.length">장바구니가 비어 있습니다.</p>
  </div>
</template>

<script>
export default {
  inject: ["cart", "removeFromCart"],
};
</script>
