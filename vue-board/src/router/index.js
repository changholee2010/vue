import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostForm from "../views/PostForm.vue";
import PostDetail from "../views/PostDetail.vue";

const routes = [
  { path: "/", component: PostList },
  { path: "/post/new", component: PostForm },
  { path: "/post/:id", component: PostDetail, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
