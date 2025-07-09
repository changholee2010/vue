<template>
  <div id="app">
    <h1>Todo List</h1>
    <todo-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      @toggle-completed="toggleComplete"
      @remove="removeTodo"
    />
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="새 할 일 입력"
    />
  </div>
</template>

<script>
// 자식 컴포넌트 TodoItem.vue를 임포트
import TodoItem from "../components/TodoItem.vue";

export default {
  name: "App",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      todos: [
        { id: 1, text: "Vue 공부하기", completed: false },
        { id: 2, text: "저녁 먹기", completed: false },
        { id: 3, text: "운동하기", completed: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        const newTodo = {
          id: Date.now(),
          text: this.newTodo,
          completed: false,
        };
        this.todos.push(newTodo);
        this.newTodo = ""; // 입력창 초기화
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleComplete(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
input {
  padding: 10px;
  margin-top: 20px;
  width: 200px;
}
</style>
