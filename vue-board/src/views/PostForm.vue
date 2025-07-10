<template>
  <div>
    <h2>✍ 새 게시글 작성</h2>
    <form @submit.prevent="submitPost" class="form">
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <button type="submit" class="btn pink">등록</button>
      <router-link to="/" class="btn green">목록으로</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitPost() {
      if (!this.title || !this.content) return alert("내용을 입력해주세요");

      this.$store.commit("ADD_POST", {
        title: this.title,
        content: this.content,
      });

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

textarea {
  height: 100px;
  resize: vertical;
}

.btn {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.btn.pink {
  background-color: #e91e63;
}

.btn.green {
  background-color: #4caf50;
}
</style>
