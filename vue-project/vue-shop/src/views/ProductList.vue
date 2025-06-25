<script>
export default {
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      //   this.productList = await this.$api("/api/productList", {});
      const json = `[
  {
    "product_name": "기계식 키보드",
    "price": 25000,
    "category": "노트북/태블릿",
    "delivery_price": 5000
  },
  {
    "product_name": "무선 마우스",
    "price": 12000,
    "category": "노트북/태블릿",
    "delivery_price": 5000
  },
  {
    "product_name": "아이패드",
    "price": 725000,
    "category": "노트북/태블릿",
    "delivery_price": 5000
  },
  {
    "product_name": "무선충전기",
    "price": 42000,
    "category": "노트북/태블릿",
    "delivery_price": 5000
  }
]`;
      this.productList = JSON.parse(json);
      console.log(this.productList);
    },
    goToDetail(product_id) {
      this.$router.push({ path: "/detail", query: { product_id: product_id } });
    },
  },
};
</script>

<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected></option>
            <option value="1">노트북</option>
            <option value="2">모니터</option>
            <option value="3">마우스/키보드</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xl-3 col-lg-4 col-md-6"
          v-bind:key="i"
          v-for="(product, i) in productList"
        >
          <div class="card" style="width: 18rem">
            <a v-on:click="goToDetail(product.id)" style="cursor: pointer"
              ><img
                v-bind:src="'/download/${product.id}/${product.path}'"
                class="card-img-top"
                alt="..."
            /></a>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.product_name }}</h5>
            <p class="card-text">
              <span class="badge bd-dark text-white mr-1">{{
                product.category1
              }}</span>
              <span class="badge bd-dark text-white mr-1">{{
                product.category2
              }}</span>
              <span class="badge bd-dark text-white">{{
                product.category3
              }}</span>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" role="group">
                <button class="btn btn-sm btn-outline-secondary">
                  장바구니담기</button
                ><button class="btn btn-sm btn-outline-secondary">
                  주문하기
                </button>
              </div>
              <small class="text-dark">{{ product.product_price }}원</small>
            </div>
          </div>
        </div>
        <!-- v-for -->
      </div>
    </div>
  </main>
</template>
