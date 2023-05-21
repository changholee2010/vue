import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/main',
    name: 'iMain',
    component: Main,
    props: true,
  }, {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  }, {
    path: '*',
    redirect: '/main'
  }]
})