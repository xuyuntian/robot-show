import Vue from 'vue'
import VueRouter from 'vue-router'
import showChildren from './show/children.js'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'show',
    component:()=>import('../views/show/index.vue'),
    children:showChildren
  }
]

const router = new VueRouter({
  routes
})

export default router
