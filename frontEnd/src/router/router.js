import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'

Vue.use(Router)

// 动态加载组件  ??????

/*function createView(value){
	return function (){
		console.log(require("../components/resumeComponent/infoComponent/base/index.vue"));
		return 	require("../components/resumeComponent/infoComponent/base/index.vue")
	}	
}*/

import Info from "../components/resumeComponent/infoComponent/base/index.vue"
import Project from "../components/resumeComponent/projectComponent/base/index.vue"

import Skill from "../components/resumeComponent/skillComponent/index.vue"
import Profile from "../components/resumeComponent/profileComponent/index.vue"
import Work from "../components/resumeComponent/workComponent/index.vue"
import Education from "../components/resumeComponent/educationComponent/index.vue"

const router = new Router({
	//mode: 'history',
  	scrollBehavior: () => ({ y: 0 }),
	routes:[
	    {path:"/info",component:Info},
	    {path:"/project",component:Project},
	    {path:"/profile",component:Skill},
	    {path:"/skill",component:Profile},
	    {path:"/work",component:Work},
	    {path:"/education",component:Education},
	    {path:"/",redirect:'/info'}
	]
})

router.afterEach(route => {
  	store.commit('currentNavChange',route.path.slice(1))
})

export default router;