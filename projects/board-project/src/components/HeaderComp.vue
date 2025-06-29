<template>
  <header>
    <h2>간단한 게시판</h2>
    <p>게시판 데이터 json 파일 읽기</p>
    <input type="file" v-on:change="loadData($event)">
    <button v-on:click="saveBoardList">게시판 저장하기</button>
  </header>
</template>

<script>
  export default {
    methods: {
      loadData(arg) {
        console.log(arg);
      },
      saveBoardList() {
        console.log('save list');
      }
    }
  }
</script>