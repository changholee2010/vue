<template>
  <div>
    <table id="list">
      <!-- HEADER -->
      <tr>
        <th style="width:50px;">글번호</th>
        <th>글제목</th>
        <th style="width:50px;">조회수</th>
        <th style="width:70px;"></th>
      </tr>
      <!-- DATA LIST -->
      <tr v-for="item in object" v-bind:key="item.no">
        <td>{{ item.no }}</td>
        <router-link v-bind:to="{ name : 'boardRead', params : { 'item' : item.no }}">
          {{ item.title }}</router-link>
        <td>{{ item.view }}</td>
        <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
      </tr>
    </table>
    <router-link style="float:right;" v-bind:to="{ name : 'boardWrite'}">글쓰기</router-link>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        objects: [{
            no: "1",
            title: "첫번째글",
            content: "첫번째 글입니다.",
            view: "1"
          },
          {
            no: "2",
            title: "두번째글",
            content: "두번째 글입니다.",
            view: "1"
          },
          {
            no: "3",
            title: "세번째글",
            content: "세번째 글입니다.",
            view: "1"
          }
        ],
        object: []
      }
    },
    inject: ['boardList'],
    mounted() {
      console.log(this.boardList);
      this.object = this.boardList;
    }
  }
</script>