// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
// import Snail from '@/plugins/snail'
// import Store from './plugins/store'
// import axios from 'axios'
// import Api from '@/config/api'
import store from '@/store'
// Vue.prototype.$axios = axios
// Vue.prototype.$config = Api
Vue.config.productionTip = false
// Vue.use(Snail)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
