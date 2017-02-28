/**
 * Created by wangyun on 17/2/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    currentNav: 'info'
  },
  mutations: {
    currentNavChange (state,a) {
      state.currentNav = a || 'info';
    }
  }
})

export  default store;
