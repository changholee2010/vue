<template>
  <div>
    <header-comp />
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
    <button style="float:right;" @click="$router.push('/write')">글쓰기</button>
    <!-- <router-link style="float:right;" v-bind:to="{ name : 'boardWrite'}">글쓰기</router-link> -->
  </div>
</template>

<script>
  import HeaderComp from '../components/HeaderComp.vue';

  export default {
    components: {
      HeaderComp
    },
    data: function () {
      return {
        object: [], // 사용안함.
        // object: [{
        //     no: "1",
        //     title: "첫번째글",
        //     content: "첫번째 글입니다.",
        //     view: "1"
        //   },
        //   {
        //     no: "2",
        //     title: "두번째글",
        //     content: "두번째 글입니다.",
        //     view: "1"
        //   },
        //   {
        //     no: "3",
        //     title: "세번째글",
        //     content: "세번째 글입니다.",
        //     view: "1"
        //   }
        // ]
      }
    },
    // inject: ['boardList'],
    methods: {
      boardDelete(no) {
        // 화면에서 지우고...실제 데이터도 지우고..
        this.object = this.object.filter(board => board.no == no ? false : true);
        this.$parent.$parent.boardDelete(no)
      }
    },
    mounted() {
      console.log('boardList', this.$parent)
      this.object = this.$parent.$parent.boardList;
    }
  }
</script>