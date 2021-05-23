import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Departement from '../views/Departement'
import Employee from '../views/Employee'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name : 'Login'
        })
      }

      next()
    }
  },
  {
    path: '/departement',
    name: 'Departement',
    component: Departement,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name : 'Login'
        })
      }

      next()
    }
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name : 'Login'
        })
      }
      next()
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
