<template>
  <div>
    <header-comp />
    <table id="list">
      <tr>
        <td>글제목</td>
        <td><input type="text" style="width:90%; " v-model="title"></td>
      </tr>
      <tr>
        <td colspan="2">
          <textarea style="width:100%;" v-model="content"></textarea>
        </td>
      </tr>
    </table>
    <!-- <router-link style="float:right;" v-bind:to="{ name : 'boardList'}">목록</router-link> -->
    <button style="float:right;" @click="$router.push('/list')">목록</button>
    <button style="float:right;" v-on:click="boardSave">저장</button>
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
        title: '',
        content: ''
      }
    },
    methods: {
      boardSave: function () {
        let boardInfo = {
          'id': 2,
          'title': this.title,
          'post': this.content
        }
        console.log(boardInfo)
        // const VueObject = this;

      }
    }
  }
</script>