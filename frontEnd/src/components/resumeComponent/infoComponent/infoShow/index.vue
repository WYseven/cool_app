<template src="./temp.html">

</template>
<script>

import {informations} from '../infoStaticData.js'

 export default {
 	data(){
 		return {
 			informations
 		}
 	},
 	props:['ruleForm'],
 	computed:{
 		ruleFormFilted(){
 			//将信息再次整合
 			let ruleForm = this.ruleForm;
 			let arr = [];
 			for(var attr in ruleForm){
 				if(ruleForm[attr]){
 					arr.push({
 						title:this.informations[attr],
 						value:ruleForm[attr]
 					})
 				}
 			}
 			return arr;
 		}
 	},
 	methods:{
 		editor(){
 			this.$emit("editor");
 		}
 	}

}
</script>
<style src="./style.css"></style>

