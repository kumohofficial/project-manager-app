import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/App/Projects.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/App/Project.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/User/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/User/Register.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
