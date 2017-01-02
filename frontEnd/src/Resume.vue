<template>
  <div>hello</div>
</template>

<script>
export default {
  name:"Resume",
  created(){
    this.$http.post("/api/user/reg",{userName:"leo123",password:"123"},{
      emulateJSON:true
    })
    .then(function(data){
      return data.json()
    })
    .then(function(data){
      console.log(data);
    });
  }
}
</script>

<style>

</style>
