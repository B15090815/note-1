// comment
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const states = {
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
}

const store = new Vuex.Store({
  state: states,
  mutations: {
    changeLogin (state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store
