/**
 * Created by wangyun on 17/2/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentNav: 'info'
  },
  mutations: {
    currentNavChange (state,a) {
      state.currentNav = a;
    }
  }
})

export  default store;
