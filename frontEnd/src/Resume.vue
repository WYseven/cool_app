<template>
  <div>
    <comm-header></comm-header>
    <comm-nav :current-nav="currentNav"></comm-nav>
    <div class="content">
      <div class="content-left">
        <router-view></router-view>
      </div>
      <div class="content-right">
        <preview></preview>
      </div>
    </div>
    
    <comm-footer></comm-footer>
  </div>
</template>

<script>

import commHeader from "./components/commComponent/commResume/commHeader/index"
import commFooter from "./components/commComponent/commResume/commFooter/index"
import commNav from "./components/commComponent/commResume/commNav/index"
import preview from "./components/resumeComponent/previewComponent/index"

export default {
  data(){
    return {

    }
  },
  computed:{
    currentNav(){
        return this.$store.state.currentNav
    }
  },
  name:"Resume",
  components:{
    commHeader,
    commFooter,
    commNav,
    preview
  }
}

</script>
<style src="./assets/css/reset.css"></style>
<style>
  .content {
    width: 1000px;
    margin: 30px auto 0;
    overflow: hidden;
    min-height: 500px;
  }
  .content-left {
    float: left;
    box-sizing:border-box;
    width: 752px;
  }
</style>
