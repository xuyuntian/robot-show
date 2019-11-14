import Vue from 'vue'
import VueRouter from 'vue-router'
import showChildren from './show/children'
import managerChildren from './manager/children'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'show',
    component:()=>import('../views/show/index.vue'),
    children:showChildren
  },
  {
    path:'/manager',
    name:'manager',
    component:() => import('../views/manager/index.vue'),
    children:managerChildren
  }
]

const router = new VueRouter({
  routes
})

export default router
