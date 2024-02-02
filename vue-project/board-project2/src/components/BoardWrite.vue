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
    <button style="float:right;" @click="$router.push('/board')">목록</button>
    <button style="float:right;" v-on:click="boardSave">저장</button>
  </div>
</template>

<script>
  import HeaderComp from './HeaderComp.vue';

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
        console.log('BoardWrite>boardSave')
        this.$emit('save-board', this.title, this.content);
      }
    },
    mounted() {
      // this.object = this.boardList;
      console.log('boardWrite', this.$parent.boardList)
    }
  }
</script>