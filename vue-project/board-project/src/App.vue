<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/list">글목록</router-link> |
    <!-- <router-link to="/write">글등록</router-link> | -->
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
  import json from './assets/board.json'

  export default {
    data() {
      return {
        // boardList: [],
        boardList: [{
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
        ]
      }
    },
    // provide() {
    //   return {
    //     boardList: [{
    //         no: "1",
    //         title: "첫번째글",
    //         content: "첫번째 글입니다.",
    //         view: "1"
    //       },
    //       {
    //         no: "2",
    //         title: "두번째글",
    //         content: "두번째 글입니다.",
    //         view: "1"
    //       },
    //       {
    //         no: "3",
    //         title: "세번째글",
    //         content: "세번째 글입니다.",
    //         view: "1"
    //       }
    //     ]
    //   }
    // },
    methods: {
      boardDelete(no) {
        console.log('boardDelete', no);
        this.boardList = this.boardList.filter(board => {
          return board.no == no ? false : true;
        })
      }
    },
    mounted() {
      console.log('App.vue', json);
    }
  }
</script>

<style>
  @import url("../src/assets/style.css");

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>