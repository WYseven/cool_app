<template src="./temp.html">

</template>
<script>
import addButton from '../../comm/addButton/index.vue'
import edit from '../../comm/edit/index.vue'
export default {
	components:{
		addButton,
		edit
	},
	props:{
		projectruleArr:{
			type:Array,
			default:()=>{
				return []
			}
		}
	},
	methods:{
		clickBtnHandle(){  //点击添加项目按钮
			this.$emit('click-add-btn')
		}
	}
}
</script>
<style src="./style.css"></style>

