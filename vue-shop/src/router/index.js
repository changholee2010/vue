import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ImageInsert from "../views/ImageInsert.vue";
import ProductList from "../views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/image_insert",
  //   name: "imageInsert",
  //   component: ImageInsert,
  // },
  {
    path: "/list",
    name: "productList",
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
