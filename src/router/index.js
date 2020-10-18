// import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'
import Write from '@/components/Write'
import Login from '@/components/Login'
import AuthLayout from '@/layout/AuthLayout'
import Register from '@/components/Register'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'post',
      component: Layout,
      children: [
        {
          path: 'post',
          name: 'post',
          component: Write,
          meta: {
            requireAuth: false
          }
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
