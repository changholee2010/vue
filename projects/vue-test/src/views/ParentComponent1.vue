<template>
  <div class="about">
    <child-component @send-message="sendMessage" ref="child_component" />
    <button type="button" @click="changeChildData">Change Data</button>
  </div>
</template>

<script>
  import ChildComponent from '../components/ChildComponent1'

  export default {
    components: {
      ChildComponent
    },
    mounted() {
      // this.$refs.child_component.$refs.btn.click(); // 이벤트를 직접 호출.
      this.$refs.child_component.callFromParent(); // 함수를 직접 호출.
    },
    methods: {
      changeChildData() {
        this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터.';
      }
    }
  }
</script>