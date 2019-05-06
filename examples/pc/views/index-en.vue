<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="section section-banner">
      <div class="container" style="background:#F8FAFF;box-shadow:0 0 0 0;">
        <div class="logo">
          <img src="../assets/ce-logo.png" alt>
        </div>
        <h1>A Lightweight and Modular Front-End UI Library</h1>
        <div class="btn-container">
          <div class="btn btn-begin">
            <router-link :to="{ name: 'Introduction-en' }">GET STARTED</router-link>
          </div>
          <div class="btn btn-github">
            <a href="https://github.com/at-ui/at-ui" style="color:rgb(2, 200, 247);">GITHUB</a>
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
          <div class="title">Guide</div>
          <div
            class="desc"
          >Understand the design guidelines, makes design and prototype more simple and accessible for all project members.</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Guide-en' }">
              View Details
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-2.png" alt>
          </div>
          <div class="title">Component</div>
          <div
            class="desc"
          >Base on Vue.js, experience interaction details by strolling through component demos. Use the components singleton or global is free.</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Docs-en' }">
              View Details
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-3.png" alt>
          </div>
          <div class="title">Resource</div>
          <div
            class="desc"
          >Provide the design resources, product managers can make prototype more simple and efficient. Save time and improve work efficiency.</div>
          <div class="btn-readmore">
            <router-link :to="{ name: 'Resource-en' }">
              View Details
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
