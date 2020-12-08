import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/city/wuhan',
    name: 'Wuhan',
    component: () => import('../views/city/Wuhan'),
  },
  {
    path: '/city/yichang',
    name: 'Yichang',
    component: () => import('../views/city/Yichang'),
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/forum/Forum'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/search/Search'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
