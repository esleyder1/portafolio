import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/projects',
    name: 'Proyectos',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Projects')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () =>
      import(/* webpackChunkName: "articles" */ '../views/Articles')
  },
  { 
    path: '*',
    component: () =>
    import(/* webpackChunkName: "404" */ '../components/ErrorComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
