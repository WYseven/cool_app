<template src="./temp.html">

</template>
<script>
import infoPrompt from '../../comm/prompt/InfoPrompt.vue'
import mAlert from '../../comm/alert/index.vue'
import ProjectShow from '../projectShow/index.vue'
export default {
 	data(){
 		return {
 			atLeastThree:false,
 			isProjectShow:false,  //是否显示展示
 			ProjectruleForm:{
 				projectName:'妙味课堂123',  //项目名称
 				projectSkills:["javascript","css","html"],//所用技术
 				projectUrl:'http://www.miaov.com/',   //项目地址
 				projectDescribe:'JS整站开发之：整屏切换+动画制作神器“TweenMax库”导航条和首屏出场动画、3D翻转实现、整屏切换，页面动画计算滚动条滚动距离， 拖动滚动条触发页面动画，完善每一屏内的图片翻转，缩小浏览器，做布局转换。', //项目描述
 				functionalDescribe:[
 					{
 						title:'整站开发',
 						value:'整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发',
 						isAlert:false
 					},
 					{
 						title:'整站开发',
 						value:'整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发',
 						isAlert:false
 					},
 					{
 						title:'整站开发',
 						value:'整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发整站开发',
 						isAlert:false
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
 					{required:false,message:"请填写所用技术",trigger:"blur,change"}
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
 		infoPrompt,
 		mAlert,
 		ProjectShow
 	},
 	computed:{
 		functionalDescribe(){
 			return this.ProjectruleForm.functionalDescribe;
 		},
 		len(){
 			return this.functionalDescribe.length
 		}
 	},
 	mounted(){
 		document.addEventListener('click',()=>{
 			this.functionalDescribe.forEach((item)=>{
 				item.isAlert = false;
 			})
 		})
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

		 			//需要发送ajax请求
		 			document.body.scrollTop = 0;
		 			setTimeout(()=>{
		 				this.isProjectShow = true;
		 			},1000)

		 			console.log( this.ProjectruleForm );
 				}
 			} );
 		},
 		reconfirm(item,ev){
 			this.functionalDescribe.forEach((value)=>{
 				console.log(value !== item);
 				if(value !== item){
 					value.isAlert = false;
 				}
 			})

 			item.isAlert = true;
 		},
 		addDescribe(){  //添加功能描述
 			this.functionalDescribe.push({
 				value:'',
 				title:'',
 				isAlert:false,
 				key:new Date()
 			});

 			if(this.len >=3 ){
 				this.atLeastThree = false;
 			}
 		},
 		cancelDescribe(item){

 			item.isAlert = false;
 		},
 		removeDescribe(index){  //移出功能描述
 			this.functionalDescribe.splice(index,1);
 		}
 	}
}
</script>
<style src="./style.css"></style>

