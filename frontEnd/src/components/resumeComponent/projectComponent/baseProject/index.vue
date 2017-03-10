<template src="./temp.html">

</template>
<script>
import infoPrompt from '../../prompt/InfoPrompt.vue'
 export default {
 	data(){
 		return {
 			ProjectruleForm:{
 				projectName:'',  //项目名称
 				projectUrl:'',   //项目地址
 				projectDescribe:'' //项目描述
 			},
 			ProjectRules:{
 				projectName:[
 					{required:true,message:"请填写项目名称",trigger:"blur,change"}
 				],
 				projectUrl:[
 					{required:true,message:"请填写项目地址",trigger:"blur,change"}
 				],
 				projectDescribe:[
 					{required:true,message:"请填写项目描述",trigger:"blur,change"}
 				]
 			}
 		}
 	},
 	components:{
 		infoPrompt
 	}
}
</script>
<style src="./style.css"></style>

