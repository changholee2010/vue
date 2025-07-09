<template>
  <h3>상위컴포넌트 = 하위컴포넌트(PageTitle)</h3>
  <PageTitle
    v-bind:title="titleMsg"
    v-bind:likes="likeCnt"
    v-bind:isOK="OkVal"
    v-bind:members="memberList"
  >
    <template v-slot><p>slot의 내용입니다.</p></template>
    <template v-slot:header><p>Header의 slot입니다.</p></template>
    <template v-slot:footer><p>Footer의 slot입니다.</p></template>
  </PageTitle>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      titleMsg: "동적인 내용을 전달하기.",
      likeCnt: 3,
      OkVal: false,
      memberList: [
        { name: "아버지", age: 40 },
        { name: "어머니", age: 35 },
        { name: "아들", age: 5 },
      ],
    };
  },
};
</script>
