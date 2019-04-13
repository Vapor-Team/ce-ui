<template>
  <div class="wrapper">
    <m-header></m-header>
    <div class="at-container row">
      <sidebar :data="navs"></sidebar>
      <div class="at-markdown col-sm-24 col-md-18 col-lg-20">
        <transition name="fade" mode="out-in" @after-leave="afterLeave">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<style >

</style>

<style  scoped>
.wrapper {
  background-color: #F8FAFF;
}
.page-header {
  position: relative !important;
}
.footer {
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, .8);
}
</style>

<script>
import MHeader from "../components/header"
import MFooter from "../components/footer"
import Sidebar from "../components/sidebar"
import navsConfig from "@/nav.config.json"

export default {
  components: {
    Sidebar,
    MHeader,
    MFooter
  },
  data () {
    return {
      navs: navsConfig.en.components
    }
  },
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
