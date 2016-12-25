<template>
  <div>
    <input v-model="userName" />
    <input type="password" v-model="password" />
    <input type="button" value="注册" @click="clickMethods" />
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data(){
    return {
      userName: "",
      password: ""
    }
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
