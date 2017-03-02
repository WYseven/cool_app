<template>
	<div class="promptCon" :class="classes">
		<div class="promptTitle">
			<p class="title">{{title}}</p>
			<slot></slot>
		</div>
		
	</div>
</template>
<script>
export default {
	name:"InfoPrompt",
	props:{
		title:String,
		cls:String,
		showPrompt:{
			type:Boolean,
			default:true
		}
	},
	computed:{
		classes(){
			return `m-prompt-${this.cls}`
		}
	}
}
</script>
<style scoped>
	/*基本信息*/
	.m-prompt-info {
	    background: #fff url(/static/images/common/infoPro.jpg) no-repeat 76px 31px;
	}
	/*项目经验*/
	.m-prompt-project {
        background: #fff url(/static/images/common/projectPro.jpg) no-repeat 76px 31px;
	}
	/*个人介绍*/
	.m-prompt-profile {
	    background: #fff url(/static/images/common/profilePro.jpg) no-repeat 76px 31px;
	}
	/*技能评估*/
	.m-prompt-skill {
	    background: #fff url(/static/images/common/skillPro.jpg) no-repeat 76px 31px;
	}
	/*工作经历*/
	.m-prompt-work {
	    background: #fff url(/static/images/common/workPro.jpg) no-repeat 76px 31px;
	}
	/*教育经历*/
	.m-prompt-education {
	    background: url(/static/images/edu/eduTitleBg.png) no-repeat #fff;
	}

	.promptCon {
	    width: 340px;
	    height: 190px;
	    background-color: #fff;
	    font-size: 16px;
	    color: #555e67;
	    padding-left: 360px;
	    padding-right: 50px;
	    display: table;
	}

	.promptCon .promptTitle {
		display: table-cell;
		vertical-align: middle;
	}

	.title{
		line-height: 30px;
	}

</style>

