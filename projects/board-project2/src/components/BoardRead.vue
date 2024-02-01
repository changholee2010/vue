<template>
  <div>
    <header-comp />
    <table id="list" border="1">
      <tr>
        <td style="width:50px;">글제목</td>
        <td>{{ board.title }}</td>
      </tr>
      <tr style="height:300px;">
        <td colspan="2">{{ board.content }}</td>
      </tr>
    </table>
    <button style="float: right;" @click="showList">목록</button>
    <!-- <router-link style="float:right;" v-bind:to="{ name : 'boardList' }">목록</router-link> -->
    <!-- <button style="float:right;" @click="$router.push('/list')">목록</button> -->
  </div>
</template>

<script>
  import HeaderComp from './HeaderComp.vue';

  export default {
    components: {
      HeaderComp
    },
    props: ['board'],
    data() {
      return {
        object: {}
      }
    },
    methods: {
      showList() {
        this.$emit('show-list');
      }
    },
    // inject: ['boardList'],
    mounted() {
      let no = this.$route.params.item;
      console.log('boardRead', no)
      let boardList = this.$parent.boardList;
      for (let board of boardList) {
        if (board.no == no) {
          this.object = board;
        }
      }
    }
  }
</script>