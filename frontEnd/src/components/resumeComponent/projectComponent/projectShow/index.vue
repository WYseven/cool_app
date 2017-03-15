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
		projectShowData:{
			type:Object,
			default:()=>{
				return {}
			}
		}
	}
}
</script>
<style src="./style.css"></style>

