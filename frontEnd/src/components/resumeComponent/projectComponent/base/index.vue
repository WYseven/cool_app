<template src="./temp.html">

</template>
<script>
import infoPrompt from '../../comm/prompt/InfoPrompt.vue'
import fillProjectInfo from '../fillProjectInfo/index.vue'
import ProjectShow from '../projectShow/index.vue'
export default {
 	data(){
 		return {
 			isProjectShow:false,  //是否显示展示
 			projectruleArr:[],
 			loaded:false,  //填写表单是否显示
 			projectruleArrAction:{},
 			ProjectruleFormData:{
 				projectName:'',  //项目名称
 				projectSkills:[],//所用技术
 				projectUrl:'',   //项目地址
 				projectDescribe:'', //项目描述
 				functionalDescribe:[]  //功能描述
 			} //向填写的表单中填入数据
 		}
 	},
 	components:{
 		infoPrompt,
 		fillProjectInfo,
 		ProjectShow
 	},
 	async beforeMount(){
 		await this.$store.dispatch("getProjectData");
 		//利用获取到的数据
 		this.projectruleArr = this.$store.state.project.projectruleArr;
 		this.projectruleArrAction = this.$store.state.project.projectruleArr;
 		this.loaded = true;
 	},
 	computed:{
 		isFillShow(){
 			return !!this.projectruleArrAction.length;
 		}
 	},
 	mounted(){
 	},
 	methods:{
 		addProject(){
 			this.projectruleArrAction = [];
 		},
 		clickLoaded(){
 			this.loaded = false;
 		},
 		clickCommit(data){
 			this.projectruleArrAction = [1];
			this.loaded = true;
 			this.ProjectruleFormData = {
 				projectName:'',  //项目名称
 				projectSkills:[],//所用技术
 				projectUrl:'',   //项目地址
 				projectDescribe:'', //项目描述
 				functionalDescribe:[]  //功能描述
 			}
 		}
 	}
}
</script>
<style src="./style.css"></style>

