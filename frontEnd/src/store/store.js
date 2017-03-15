/**
 * Created by wangyun on 17/2/28.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import project from './modules/project.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules:{
    project
  },
  state: {
    currentNav: 'info',  //所处在的路由
    info:[]
  },
  mutations: {
    currentNavChange (state,a) {
      state.currentNav = a || 'info';
    }
  },
  actions:{
  	['request-info-save']({commit},data){
      return Vue.axios.post(
            data.url,
            data.data,
            {
              headers:{
                'Content-Type':'application/json'
              }
            }
        ).then(function (){
            
        })
    },
    ['request-project-save']({commit},data){
      return Vue.axios.post(
            data.url,
            data.data,
            {
              headers:{
                'Content-Type':'application/json'
              }
            }
        )
    }
  }
})

export  default store;
