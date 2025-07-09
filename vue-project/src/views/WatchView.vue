<template>
  <h3>Watch</h3>
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <p class="char-count">현재: {{ charCount }} 자 / 최대 50자</p>
  <p>{{ feedMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false,
      feedMessage: "메세지를 입력하세요",
    };
  },
  watch: {
    messageContent(nv, ov) {
      console.log(nv + "," + ov);
      this.charCount = nv.length;
      // 50자 => charFull: true, feedMessage: '제한 50자입니다.'
      if (nv.length >= 50) {
        this.charFull = true;
        this.feedMessage = "제한 50자입니다.";
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e9ecef;
  margin: 0;
}
#app {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 90%;
  max-width: 500px;
}
h2 {
  color: #343a40;
  margin-bottom: 25px;
}
textarea {
  width: 100%;
  height: 120px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 */
  resize: vertical; /* 수직으로만 크기 조절 가능 */
}
p {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #495057;
}
.message {
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  margin-top: 15px;
  display: inline-block;
}
.message.info {
  background-color: #e0f7fa;
  color: #007bff;
}
.message.warning {
  background-color: #fff3cd;
  color: #ffc107;
}
.message.danger {
  background-color: #f8d7da;
  color: #dc3545;
}
.char-count {
  font-size: 0.9em;
  color: #6c757d;
  margin-top: -10px;
  margin-bottom: 20px;
}
</style>
