<template src="./temp.html">

</template>
<script>

export default {
  name:"mAlert",
  props:{
    title:{
      type:String,
      default:''
    },
    cancelStop:{
      type:Boolean,
      default:false
    },
    okStop:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    ok(ev){

        this.$emit("click-ok",ev);

        if(this.okStop){
          ev.stopPropagation();
        }
    },
    cancel(ev){
      if(this.cancelStop){
        ev.stopPropagation();
      }
        this.$emit("click-cancel",ev);

    }
  }
}


</script>
<style src="./style.css"></style>
