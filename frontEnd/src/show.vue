<template>
  <div>
    <HeaIntro></HeaIntro>
    <Skills></Skills>
    <TimeAxis></TimeAxis>
    <Case></Case>
    <Project></Project>
		<PageFooter></PageFooter>
  </div>
</template>

<script>

import HeaIntro from './components/showComponent/heaIntro'
import Skills from './components/showComponent/skills'
import TimeAxis from './components/showComponent/timeAxis'
import Case from './components/showComponent/case'
import Project from './components/showComponent/project'
import PageFooter from './components/showComponent/pageFooter'
export default {
	mounted(){
	    //do something
	    document.getElementsByTagName("body")[0].id = "red";
	},
  data(){
    return {
      userName: "",
      password: ""
    }
  },
  components:{
    HeaIntro,
    Skills,
    TimeAxis,
    Case,
    Project,
    PageFooter
  },
  name: 'show',
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


<style type="text/css" src="./components/commComponent/style.css"></style>
<style type="text/css" src="./components/commComponent/different.css"></style>
