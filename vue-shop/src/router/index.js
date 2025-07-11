import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImageInsert from "../views/ImageInsert.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import SalesList from "../views/SalesList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/image_insert",
    name: "imageInsert",
    component: ImageInsert,
  },
  {
    path: "/list",
    name: "productList",
    component: ProductList,
  },
  {
    path: "/detail",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/sales",
    name: "salesList",
    component: SalesList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
