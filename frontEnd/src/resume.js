/**
 * Created by seven on 2016/12/27.
 */
import Vue from 'vue'
import Resume from './Resume.vue'

import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)

Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Resume/>',
  components: { Resume }
})
