<template>
  <div>
    <BoardList v-bind:object="boardList" v-if="listView" @show-read="showRead" @show-write="showWrite" />
    <BoardRead v-if="readView" v-bind:board="board" @show-list="showList" />
    <BoardWrite v-if="writeView" @save-board="saveBoard" />
    <FooterComp />
  </div>
</template>

<script>
  import BoardList from '../components/BoardList.vue'
  import BoardRead from '../components/BoardRead.vue'
  import BoardWrite from '../components/BoardWrite.vue'
  import FooterComp from '../components/FooterComp.vue'

  export default {
    components: {
      BoardList,
      BoardRead,
      BoardWrite,
      FooterComp
    },
    data() {
      return {
        listView: true,
        readView: false,
        writeView: false,
        board: {},
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
    methods: {
      showRead(item) {
        this.listView = false;
        this.readView = true;
        this.writeView = false;
        this.board = item;
      },
      showList() {
        this.listView = true;
        this.readView = false;
        this.writeView = false;
      },
      showWrite() {
        this.listView = false;
        this.readView = false;
        this.writeView = true;
      },
      saveBoard(title, content) {
        console.log('save', title, content)
        let no = parseInt(this.boardList[this.boardList.length - 1].no) + 1;
        const board = {
          no,
          title,
          content
        }
        this.boardList.splice(this.boardList.length, 0, board);
        this.showList();
      },
      boardDelete(no) {
        console.log('boardDelete', no);
        this.boardList = this.boardList.filter(board => {
          return board.no == no ? false : true;
        })
      }
    },
    mounted() {
      console.log('App.vue', this);
    }
  }
</script>