<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleCompleted"
    />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="remove">삭제</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
    index: Number,
  },
  methods: {
    toggleCompleted() {
      // this.todo.completed = !this.todo.completed;
      this.$emit("toggle-completed", this.index); // 부모에게 이벤트 전송
    },
    remove() {
      this.$emit("remove", this.index); // 부모에게 삭제 이벤트 전달
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
</style>
