/**
 * Created by seven on 2016/12/27.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import router from './router/router'
import Resume from './Resume.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import store from './store/store.js'


Vue.use(VueResource)

Vue.use(ElementUI)

/* eslint-disable no-new */
var app = new Vue({
  router,
  store,
  ...Resume
})

export {app,router,store}


