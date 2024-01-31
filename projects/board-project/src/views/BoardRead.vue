<template>
  <div>
    <header-comp />
    <table id="list" border="1">
      <tr>
        <td style="width:50px;">글제목</td>
        <td>{{ object.title }}</td>
      </tr>
      <tr style="height:300px;">
        <td colspan="2">{{ object.content }}</td>
      </tr>
    </table>
    <!-- <router-link style="float:right;" v-bind:to="{ name : 'boardList' }">목록</router-link> -->
    <button style="float:right;" @click="$router.push('/list')">목록</button>
  </div>
</template>

<script>
  import HeaderComp from '../components/HeaderComp.vue';

  export default {
    components: {
      HeaderComp
    },
    props: ['item'],
    data() {
      return {
        object: {}
      }
    },
    inject: ['boardList'],
    mounted() {
      console.log('hit2', this.boardList)
      for (let board of this.boardList) {
        if (board.no == this.item) {
          this.object = board;
          break;
        }
      }
    }
  }
</script>