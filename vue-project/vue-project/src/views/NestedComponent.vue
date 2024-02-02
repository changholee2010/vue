<template>
  <div>
    <PageTitle title="부모컴퍼넌트에서 자식컴포넌트에서 전달." />
    <p>PageTitle...</p>
  </div>
</template>

<script>
  import PageTitle from '../components/PageTitle.vue'

  export default {
    components: {
      PageTitle
    }
  }
</script>