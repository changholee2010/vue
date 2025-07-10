<template>
  <div class="post-item">
    <h3 @click="$emit('view-detail', post.id)" class="clickable">
      {{ post.title }}
    </h3>
    <p>{{ post.content.slice(0, 60) }}...</p>
    <button class="btn delete" @click="$emit('delete-post', post.id)">
      삭제
    </button>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.post-item {
  position: relative;
}

.clickable {
  cursor: pointer;
}

.btn.delete {
  background-color: #f44336;
  color: white;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
</style>
