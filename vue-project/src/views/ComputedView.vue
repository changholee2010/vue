<template>
  <h3>Computed</h3>
  <h3>FirstName: {{ firstName }}</h3>
  <h3>LastName: {{ lastName }}</h3>
  <h3>{{ fullName }}</h3>

  <h3>장바구니</h3>
  <div v-bind:key="product.id" v-for="product in cart">
    <strong>{{ product.name }}</strong> - 가격: {{ product.price }}원 - 수량:
    <input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총수량: </strong> {{ totalQuantity }}개</p>
  <p><strong>총금액: </strong> {{ totalPrice }}원</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      cart: [
        { id: 1, name: "사과", price: 2000, quantity: 2 },
        { id: 2, name: "바나나", price: 1000, quantity: 3 },
        { id: 3, name: "딸기", price: 3000, quantity: 1 },
      ],
    };
  },
  computed: {
    fullName() {
      return this.firstName + ", " + this.lastName;
    },
    totalQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
  },
  mounted() {
    console.log(this);
    this.firstName = "kildong";
  },
};
</script>
