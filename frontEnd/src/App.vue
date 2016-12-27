<template>
  <div>
    <CommHeader></CommHeader>
    <IndexBanner></IndexBanner>
    <IndexFlowpath></IndexFlowpath>
    <IndexJobhunting></IndexJobhunting>
    <StartMaking></StartMaking>
    <CommFooter></CommFooter>
  </div>
</template>

<script>
import CommHeader from './components/commComponent/CommHeader'
import IndexBanner from './components/indexComponent/IndexBanner/'
import IndexFlowpath from './components/indexComponent/IndexFlowpath/'
import IndexJobhunting from './components/indexComponent/IndexJobhunting/'
import StartMaking from './components/indexComponent/StartMaking/'
import CommFooter from './components/commComponent/CommFooter'

export default {
  data(){
    return {
      userName: "",
      password: ""
    }
  },
  components:{
    CommHeader,
    IndexBanner,
    IndexFlowpath,
    IndexJobhunting,
    StartMaking,
    CommFooter
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

<style type="text/css" src="../src/components/commComponent/reset.css"></style>
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
