<template>
  <div>
    <h1>📋 게시글 목록</h1>
    <router-link class="btn pink" to="/post/new">➕ 새 글 쓰기</router-link>

    <div v-for="post in posts" :key="post.id" class="card">
      <PostItem
        :post="post"
        @view-detail="goDetail"
        @delete-post="deletePost"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostItem from "../components/PostItem.vue";

export default {
  components: { PostItem },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/post/${id}`);
    },
    deletePost(id) {
      if (confirm("정말 삭제하시겠습니까?")) {
        this.$store.commit("DELETE_POST", id);
      }
    },
  },
};
</script>

<style scoped>
.btn.pink {
  display: inline-block;
  background-color: #e91e63;
  color: white;
  padding: 10px 14px;
  text-decoration: none;
  border-radius: 6px;
  margin-bottom: 20px;
}

.card {
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
</style>
