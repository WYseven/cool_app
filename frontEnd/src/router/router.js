import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Info from "../components/resumeComponent/infoComponent/formBase/index.vue"
import Project from "../components/resumeComponent/projectComponent/baseProject/index.vue"
import Skill from "../components/resumeComponent/skillComponent/index.vue"
import Profile from "../components/resumeComponent/profileComponent/index.vue"
import Work from "../components/resumeComponent/workComponent/index.vue"
import Education from "../components/resumeComponent/educationComponent/index.vue"

const router = new Router({
	mode: 'history',
  	scrollBehavior: () => ({ y: 0 }),
	routes:[
	    {path:"/info",component:Info},
	    {path:"/project",component:Project},
	    {path:"/profile",component:Skill},
	    {path:"/skill",component:Profile},
	    {path:"/work",component:Work},
	    {path:"/education",component:Education},
	    {path:"/",redirect:'/Info'}
	]
})
//初次加载或切换路由后，获取路由值
router.afterEach(route => {
	console.log(route.path);
  //store.commit('currentNavChange',route.path.slice(1))
})

export default router;