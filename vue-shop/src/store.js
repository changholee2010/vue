import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: {},
      currentPage: "",
    };
  },
  mutations: {
    user(state, data) {
      state.user = data;
    },
    page(state, page) {
      state.currentPage = page;
    },
  },
  plugins: [
    persistedstate({
      paths: ["user"],
    }),
  ],
});

export default store;
