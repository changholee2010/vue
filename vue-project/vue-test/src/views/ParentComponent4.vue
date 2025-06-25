<template>
  <div class="about">
    <child-component @send-message="sendMessage" ref="child_component" />
  </div>
</template>

<script>
  import ChildComponent from '../components/ChildComponent4'

  export default {
    components: {
      ChildComponent
    },
    methods: {
      sendMessage(msg) {
        alert(msg)
      }
    }
  }
</script>