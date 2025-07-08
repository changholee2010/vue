<template>
  <h3>DataBindingAttr.vue</h3>
  <p>attribute 바인딩하기.</p>
  <img v-bind:src="imgSrc" v-bind:width="widVal + 'px'" />
  <p><input type="number" v-model.number="widVal" /></p>
  <p>
    <input type="text" v-model="msg" />
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
  </p>
  <p>객체을 활용한 바인딩.</p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩.</p>
  <h3 v-bind:class="classAry">김길동</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  // data영역.
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWid: "130px",
      widVal: 100,
      btnShow: true,
      msg: "",

      isRed: true, // 객체방식 {'클래스명': true, '클래스명': fals}
      isActive: true,

      activeClass: "active", // 배열을 활용한 방식.
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  methods: {
    // 이벤트.
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      // 홍길동의 폰트색깔을 변경.
      this.isRed = !this.isRed;
    },
  },
  mounted() {
    console.log(this);
    this.msg = "홍길동";
    this.imgWid = "230px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}

.active {
  background-color: antiquewhite;
}
</style>
