<template>
  <div v-if="post" class="card">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <router-link to="/" class="btn green">← 목록으로</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters.getPostById(this.id);
    },
  },
};
</script>

<style scoped>
.btn.green {
  background-color: #4caf50;
  color: white;
  padding: 10px 14px;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}
</style>
