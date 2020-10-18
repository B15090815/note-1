// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Snail from './plugins/snail'
import Router from 'vue-router'
import Store from './plugins/store'
import axios from 'axios'
import Api from './config/api'

Vue.prototype.$axios = axios
Vue.prototype.$config = Api

Vue.config.productionTip = false

Vue.use(Snail)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let token = localStorage.getItem('Authorization')
    if (token === null || token === '' || token === 'null' || token === undefined) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: {App},
  template: '<App/>'
})
