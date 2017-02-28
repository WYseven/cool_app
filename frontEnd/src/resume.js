/**
 * Created by seven on 2016/12/27.
 */
import Vue from 'vue'
import Resume from './Resume.vue'

import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueRouter from 'vue-router'

import Info from "./components/resumeComponent/infoComponent/index.vue"
import Project from "./components/resumeComponent/projectComponent/index.vue"

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
      path:"/project",
      component:Project
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Resume/>',
  components: { Resume }
})
