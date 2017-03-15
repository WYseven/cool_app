const state = {
	projectruleArr:[]
}

function getData(data){
	return new Promise((resolve,reject)=>{
			//这里未来是一个请求
			setTimeout(()=>{
				resolve(data);
		},1000);
	})	
}

const actions = {
	async getProjectData({commit}){  //获取发送请求获取数据
		//更改state
		commit('projectData',await getData());
	},
	async addProjectData({commit},data){
		await commit('projectOneData',await getData({a:1}))
	}
}

const mutations = {
	projectData(state,data){
		state.projectruleArr = data || [];
	},
	projectOneData(state,data){
		console.log(data);
		state.projectruleArr.push(data);
	}
}

export default {
  state,
  actions,
  mutations
}