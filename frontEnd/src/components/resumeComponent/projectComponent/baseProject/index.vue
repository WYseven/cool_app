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
 			loaded:false
 		}
 	},
 	components:{
 		infoPrompt,
 		fillProjectInfo,
 		ProjectShow
 	},
 	async created(){
 		await this.$store.dispatch("getProjectData");
 		this.projectruleArr = this.$store.state.project.projectruleArr;
 		this.loaded = true;
 	},
 	computed:{
 	},
 	mounted(){
 	},
 	methods:{
 		
 	}
}
</script>
<style src="./style.css"></style>

