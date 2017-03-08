<template src="./temp.html">

</template>
<script>

let companyData = [
	{
		companyLog:'/static/images/info/social01.png',
		cmpanyUrl:'',
		isWrite:false
	},
	{
		companyLog:'/static/images/info/social02.png',
		cmpanyUrl:'',
		isWrite:true
	},
	{
		companyLog:'/static/images/info/social03.png',
		cmpanyUrl:'',
		isWrite:false
	},
	{
		companyLog:'/static/images/info/social04.png',
		cmpanyUrl:'',
		isWrite:false
	},
	{
		companyLog:'/static/images/info/social05.png',
		cmpanyUrl:'',
		isWrite:true
	},
	{
		companyLog:'/static/images/info/social06.png',
		cmpanyUrl:'',
		isWrite:false
	}
]

 export default {
 	name:'infoSocial',
 	props:["value"],
 	computed:{
 		abc(){
 			console.log(this.value);
 			return this.value;
 		}
 	},
 	methods:{
 		inputs(){
 			this.$emit("input",this.abc);
 		}
 	},
 	data(){
 		return {
 			companyData
 		}
 	}
}
</script>
<style src="./style.css"></style>

