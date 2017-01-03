<template>
  <div>
    <comm-header></comm-header>
    <comm-nav></comm-nav>
    <Info></Info>
    <comm-footer></comm-footer>
  </div>
</template>

<script>

import commHeader from "./components/commComponent/commResume/commHeader/index"
import commFooter from "./components/commComponent/commResume/commFooter/index"
import commNav from "./components/commComponent/commResume/commNav/index"

import Info from "./components/resumeComponent/infoComponent/index"

export default {
  name:"Resume",
  components:{
    Info,
    commHeader,
    commFooter,
    commNav
  }
}
</script>
<style src="./assets/css/reset.css"></style>
<style>

</style>
