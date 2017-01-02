/**
 * Created by seven on 2016/12/27.
 */
import Vue from 'vue'
import Resume from './Resume.vue'

import VueResource from 'vue-resource'

Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Resume/>',
  components: { Resume }
})
