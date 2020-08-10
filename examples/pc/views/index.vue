<template>
  <div class="wrapper">
    <c-header></c-header>
    <section class="section section-banner">
      <div class="container" style="background: #f8faff; box-shadow: 0 0 0 0;">
        <div class="logo">
          <img src="../assets/ce-logo.png" alt />
        </div>
        <h1>{{ $t('docs.welcome') }}</h1>
        <div class="btn-container">
          <div class="btn btn-begin">
            <router-link :to="{ name: `introduction-${lang}` }">{{
              $t('docs.GET_STARTED')
            }}</router-link>
          </div>
          <div class="btn btn-github">
            <a
              href="https://github.com/Vapor-Team/ce-ui"
              style="color: rgb(2, 200, 247);"
              >Github</a
            >
          </div>
        </div>
      </div>
      <div class="prototype-screens flex">
        <div class="prototype prototype-1">
          <img src="../assets/prototype-1.png" alt />
        </div>
        <div class="prototype prototype-2">
          <img src="../assets/prototype-2.png" alt />
        </div>
        <div class="prototype prototype-3">
          <img src="../assets/prototype-3.png" alt />
        </div>
        <div class="prototype prototype-4">
          <img src="../assets/prototype-4.png" alt />
        </div>
      </div>
      <div class="separate-panel"></div>
    </section>
    <section class="section section-navigation">
      <div class="container flex flex-around">
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-1.png" alt />
          </div>
          <div class="title">{{ $t('docs.guide') }}</div>
          <div class="desc">
            {{ $t('docs.guideDesc') }}
          </div>
          <div class="btn-readmore">
            <router-link :to="{ name: `guide-${lang}` }">
              {{ $t('docs.view') }}
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-2.png" alt />
          </div>
          <div class="title">{{ $t('docs.component') }}</div>
          <div class="desc">
            {{ $t('docs.componentDesc') }}
          </div>
          <div class="btn-readmore">
            <router-link :to="{ name: `docs-${lang}` }">
              {{ $t('docs.view') }}
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
        <div class="navigation-panel">
          <div class="icon-cnt">
            <img src="../assets/icon-navigation-3.png" alt />
          </div>
          <div class="title">{{ $t('docs.resources') }}</div>
          <div class="desc">
            {{ $t('docs.resourcesDesc') }}
          </div>
          <div class="btn-readmore">
            <router-link :to="{ name: `resource-${lang}` }">
              {{ $t('docs.view') }}
              <i class="icon icon-chevron-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <c-footer></c-footer>
  </div>
</template>

<script>
export default {
  components: {
    CHeader: () => import('../components/header.vue'),
    CFooter: () => import('../components/footer.vue')
  },
  computed: {
    lang() {
      return this.$i18n.locale || 'zh'
    }
  }
}
</script>
