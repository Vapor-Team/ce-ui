<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="section section-banner">
      <div class="container" style="background:#F8FAFF;box-shadow:0 0 0 0;">
        <div class="logo">
          <img src="../assets/ce-logo.png" alt>
        </div>
        <h1>一款轻量级、模块化的前端 UI 组件库</h1>
        <div class="btn-container">
          <div class="btn btn-begin">
            <router-link :to="{ name: 'Introduction-zh' }">开始使用</router-link>
          </div>
          <div class="btn btn-github">
            <a href="https://github.com/Vapor-Team/ce-ui" style="color:rgb(2, 200, 247);">Github</a>
          </div>
        </div>
      </div>
      <div class="prototype-screens flex">
        <div class="prototype prototype-1">
          <img src="../assets/prototype-1.png" alt>
        </div>
        <div class="prototype prototype-2">
          <img src="../assets/prototype-2.png" alt>
        </div>
        <div class="prototype prototype-3">
          <img src="../assets/prototype-3.png" alt>
        </div>
        <div class="prototype prototype-4">
          <img src="../assets/prototype-4.png" alt>
        </div>
      </div>
      <div class="separate-panel"></div>
    </section>
    <section class="section section-navigation">
      <div class="container flex flex-around">
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-1.png" alt>
          </div>
          <div class="title">指南</div>
          <div class="desc">了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Guide' }">
              查看详情
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-2.png" alt>
          </div>
          <div class="title">组件</div>
          <div class="desc">基于 Vue 的 UI 组件化，可以通过组件的 Demo 体验交互细节，开发中既可以根据需要单独引用，也可以使用全局方式引入所有组件。</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Docs' }">
              查看详情
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-3.png" alt>
          </div>
          <div class="title">资源</div>
          <div class="desc">提供视觉稿原稿下载，产品可直接用 Sketch 工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Resource' }">
              查看详情
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from "../components/header"
import MFooter from "../components/footer"

export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>
