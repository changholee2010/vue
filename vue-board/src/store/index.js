import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    nextId: 1,
  },
  mutations: {
    ADD_POST(state, post) {
      post.id = state.nextId++;
      state.posts.push(post);
    },
    DELETE_POST(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === parseInt(id));
    },
  },
});
