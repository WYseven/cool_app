<template>
  <div>
    <comm-header></comm-header>
    <comm-nav :current-nav="currentNav"></comm-nav>
    <router-view></router-view>
    <comm-footer></comm-footer>
  </div>
</template>

<script>

import commHeader from "./components/commComponent/commResume/commHeader/index"
import commFooter from "./components/commComponent/commResume/commFooter/index"
import commNav from "./components/commComponent/commResume/commNav/index"

export default {
  data(){
    return {
        currentNav:"info"
    }
  },
  name:"Resume",
  components:{
    commHeader,
    commFooter,
    commNav
  }
}
</script>
<style src="./assets/css/reset.css"></style>
<style>

</style>
