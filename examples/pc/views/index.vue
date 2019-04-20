<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="section section-banner">
      <div class="container" style="background:#F8FAFF;box-shadow:0 0 0 0;">
        <div class="logo">
          <img src="../assets/ce-logo.png" alt="">
					<!-- <svg width="161" height="160" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<radialGradient r="0" cy="0.5" cx="0.5" spreadMethod="pad" id="svg_4">
								<stop offset="0" stop-color="#fff"/>
								<stop offset="1" stop-color="#000000"/>
							</radialGradient>
						</defs>
						<g>
							<rect fill="url(#svg_4)" id="canvas_background" height="162" width="163" y="-1" x="-1"/>
						</g>
						<g>
							<image stroke="null" xlink:href="data:image/png;base64,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" id="svg_1" height="159.992997" width="160.993519" y="-0.125" x="0"/>
						</g>
					</svg> -->
        </div>
        <h1>一款轻量级、模块化的前端 UI 组件库</h1>
        <div class="btn-container">
          <div class="btn btn-begin"><router-link :to="{ name: 'Introduction-zh' }">开始使用</router-link></div>
          <div class="btn btn-github"><a href="https://github.com/Vapor-Team/ce-ui" style="color:rgb(2, 200, 247);">Github</a></div>
        </div>
      </div>
      <div class="prototype-screens flex">
        <div class="prototype prototype-1"><img src="../assets/prototype-1.png" alt=""></div>
        <div class="prototype prototype-2"><img src="../assets/prototype-2.png" alt=""></div>
        <div class="prototype prototype-3"><img src="../assets/prototype-3.png" alt=""></div>
        <div class="prototype prototype-4"><img src="../assets/prototype-4.png" alt=""></div>
      </div>
      <div class="separate-panel"></div>
    </section>
    <section class="section section-navigation">
      <div class="container flex flex-around">
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-1.png" alt="">
          </div>
          <div class="title">指南</div>
          <div class="desc">了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。</div>
          <div class="btn-readmore"><router-link :to="{ name: 'Guide' }">查看详情 <i class="icon icon-chevron-right"></i></router-link></div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-2.png" alt="">
          </div>
          <div class="title">组件</div>
          <div class="desc">基于 Vue 的 UI 组件化，可以通过组件的 Demo 体验交互细节，开发中既可以根据需要单独引用，也可以使用全局方式引入所有组件。</div>
          <div class="btn-readmore"><router-link :to="{ name: 'Docs' }">查看详情 <i class="icon icon-chevron-right"></i></router-link></div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-3.png" alt="">
          </div>
          <div class="title">资源</div>
          <div class="desc">提供视觉稿原稿下载，产品可直接用 Sketch 工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。</div>
          <div class="btn-readmore"><router-link :to="{ name: 'Resource' }">查看详情 <i class="icon icon-chevron-right"></i></router-link></div>
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

<style lang="stylus">
@import '../assets/css/index'
</style>
