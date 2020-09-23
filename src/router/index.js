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
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/signup.vue')
  },
  {
    path: '/fpassword',
    name: 'forgotpassword',
    component: () => import( '../views/forgotpassword.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import( '../views/menupage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
