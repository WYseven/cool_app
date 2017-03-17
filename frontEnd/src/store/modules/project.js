
import simulation from './simulation.js'

const state = {
	projectruleArr:[],
	isFillShow:true
}

//备注：目前模拟请求只考虑了成功的情况，没考虑异常处理？

function getData(data){
	return new Promise((resolve,reject)=>{
			//这里未来是一个请求
			setTimeout(()=>{
				console.log("请求回来了");
				resolve(simulation);
		},1000);
	})
}

const actions = {
	async getProjectData({commit}){  //获取发送请求获取数据
		//更改state
		commit('projectData',await getData());
	},
	async addProjectData({commit},data){
		await getData(data);
		await commit('projectOneData',data)
	}
}

const mutations = {
	projectData(state,data){
		state.projectruleArr = data || [];
		state.isFillShow = !!data.length;
	},
	projectOneData(state,data){
		state.projectruleArr.push(data);
	},
	changeIsFillShow(state,bl){
		state.isFillShow = bl;
	}
}


export default {
  state,
  actions,
  mutations
}