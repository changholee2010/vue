// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, name: "Vue공부하기", chk: false },
      { id: 2, name: "TV 시청", chk: false },
      { id: 3, name: "저녁운동", chk: false },
    ],
    title: "Hello, World",
  },
  getters: {
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    // 기능구현.
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id;
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
