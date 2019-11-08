import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'show',
    component:()=>import('../views/show/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
