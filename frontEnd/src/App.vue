<template>
  <div>
    <CommHeader></CommHeader>
    <TitleShow></TitleShow>
    <Liucheng></Liucheng>
  </div>
</template>

<script>
import CommHeader from './components/commComponent/CommHeader'
import Liucheng from './components/indexComponent/Liucheng/'
import TitleShow from './components/indexComponent/titleShow/'



export default {
  data(){
    return {
      userName: "",
      password: ""
    }
  },
  components:{
    CommHeader,
    Liucheng,
    TitleShow
  },
  name: 'app',
  methods: {
    clickMethods () {
      this.$http.post(
        "http://localhost:3001/api/login",
        {
          userName:this.userName,
          password:this.password
        },
        function(){

      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
