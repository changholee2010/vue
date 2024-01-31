<template>
  <div>
    <table id="list" border="1">
      <tr>
        <td style="width:50px;">글제목</td>
        <td>{{ object.title }}</td>
      </tr>
      <tr style="height:300px;">
        <td colspan="2">{{ object.content }}</td>
      </tr>
    </table>
    <router-link style="float:right;" v-bind:to="{ name : 'boardList' }">목록</router-link>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {
        object: {
          no: 1,
          title: 'sample',
          content: 'test'
        }
      }
    },
    inject: ['boardList'],
    mounted() {
      console.log('list', this.boardList);
      for (let board of this.boardList) {
        if (board.no == this.item) {
          this.object = board;
          break;
        }
      }
    }
  }
</script>