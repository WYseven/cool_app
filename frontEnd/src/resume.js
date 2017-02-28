/**
 * Created by seven on 2016/12/27.
 */
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Resume from './Resume.vue'

import Info from "./components/resumeComponent/infoComponent/index.vue"
import Project from "./components/resumeComponent/projectComponent/index.vue"


import store from './store/store.js'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.use(ElementUI)

const router = new VueRouter({
  routes:[
    {
      path:"/info",
      component:Info
    },
    {
      path:"/",
      component:Info
    },
    {
      path:"/project",
      component:Project
    }
  ]
})
//初次加载或切换路由后，获取路由值
router.afterEach(route => {
  store.commit('currentNavChange',route.path.slice(1))
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<Resume/>',
  components: { Resume }
})


