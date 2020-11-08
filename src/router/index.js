// comment
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/components/note/Login')
  }
  // {
  //   path: '/',
  //   name: 'index',
  //   redirect: 'post',
  //   component: () => import('@/layout/Layout'),
  //   children: [
  //     {
  //       path: 'post',
  //       name: 'post',
  //       component: () => import('@/components/Write'),
  //       meta: {
  //         requireAuth: false
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/',
  //   redirect: 'login',
  //   component: () => import('@/layout/AuthLayout'),
  //   children: [
  //     {
  //       path: 'login',
  //       name: 'login',
  //       component: () => import('@/components/Login')
  //     },
  //     {
  //       path: 'register',
  //       name: 'register',
  //       component: () => import('@/components/Register')
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     let token = localStorage.getItem('Authorization')
//     if (token === null || token === '' || token === 'null' || token === undefined) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
