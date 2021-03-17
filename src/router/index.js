import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'calendar',
    component: () => import( '../views/calendar.vue')
  },
  {
    path: '/trash',
    name: 'trash',
    component: () => import( '../views/trash.vue')
  },
  {
    path: '/sets',
    name: 'sets',
    component: () => import( '../views/sets.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
