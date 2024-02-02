import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BoardList from '../views/BoardList.vue'
import BoardRead from '../views/BoardRead.vue'
import BoardWrite from '../views/BoardWrite.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'boardList',
    component: BoardList
  },
  {
    path: '/read/:item',
    name: 'boardRead',
    component: BoardRead,
    props: true
  },
  {
    path: '/write',
    name: 'boardWrite',
    component: BoardWrite
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router