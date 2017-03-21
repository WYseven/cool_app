import { app, store,router } from './resume.js'

//初次加载或切换路由后，获取路由值
router.afterEach(route => {
  	store.commit('currentNavChange',route.path.slice(1))
})

app.$mount('#app');
