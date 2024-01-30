<template>
  <modal-layout>
    <template v-slot:header>
      <h1>팝업타이틀</h1>
    </template>
    <template v-slot:default>
      <p>컨텐츠1</p>
      <p>컨텐츠2</p>
      <p>컨텐츠3</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout>
</template>


<script>
  import ModalLayout from '../components/SlotModalLayout.vue'

  export default {
    components: {
      ModalLayout
    }
  }
</script>