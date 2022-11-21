import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Display from '../views/Display.vue'

const routes = [
 {
  path:'/',
  name:'Home',
  component:Home
 },
 {
  path:'/display',
  name:'Display',
  component:Display
 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
