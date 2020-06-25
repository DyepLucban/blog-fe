import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import { blog } from './blog.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    blog,
  },
  state:{

  },
  getters: {
    getField,
  },
  actions: {

  },
  mutations: {
    updateField,
  }
})

export default store