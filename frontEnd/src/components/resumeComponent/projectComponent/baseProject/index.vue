<template src="./temp.html">

</template>
<script>
import infoPrompt from '../../prompt/InfoPrompt.vue'
 export default {
 	data(){
 		return {
 			atLeastThree:false,
 			ProjectruleForm:{
 				projectName:'',  //项目名称
 				projectSkills:'',//所用技术
 				projectUrl:'',   //项目地址
 				projectDescribe:'', //项目描述
 				functionalDescribe:[
 					{
 						title:'',
 						value:''
 					}
 				]  //功能描述
 			},
 			ProjectRules:{
 				projectName:[
 					{required:true,message:"请填写项目名称",trigger:"blur,change"}
 				],
 				projectUrl:[
 					{required:true,message:"请填写项目地址",trigger:"blur,change"}
 				],
 				projectSkills:[
 					{required:true,message:"请填写所用技术",trigger:"blur,change"}
 				],
 				projectDescribe:[
 					{required:true,message:"请填写项目描述",trigger:"blur,change"}
 				],
 				functionalValue:[
 					{required:true,message:"请填写功能描述",trigger:"blur,change"}	
 				],
 				functionalTitle:[
 					{required:true,message:"请填写功能标题",trigger:"blur,change"}	
 				]
 			}
 		}
 	},
 	components:{
 		infoPrompt
 	},
 	computed:{
 		functionalDescribe(){
 			return this.ProjectruleForm.functionalDescribe;
 		},
 		len(){
 			return this.functionalDescribe.length
 		}
 	},
 	methods:{
 		submitForm(formName){
 			

 			this.$refs[formName].validate( (valid) => {
 				if(valid){
 					//如果少于3项功能描述，则不通过提交
 					if(this.len < 3){
		 				this.atLeastThree = true;
		 				return;
		 			}
 				}
 			} )
 		},
 		addDescribe(){  //添加功能描述
 			this.functionalDescribe.push({
 				value:'',
 				title:'',
 				key:new Date()
 			});

 			if(this.len >=3 ){
 				this.atLeastThree = false;
 			}
 		},
 		removeDescribe(index){  //移出功能描述
 			this.functionalDescribe.splice(index,1);
 		}
 	}
}
</script>
<style src="./style.css"></style>

