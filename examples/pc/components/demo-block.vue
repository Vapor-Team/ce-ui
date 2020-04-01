<template>
  <div class="demo-block">
    <div
      class="code-demo"
      v-if="$slots.demoContent"
    >
      <slot name="demoContent"></slot>
    </div>
    <div class="docs-code-wrapper">
      <!-- TODO: 组件 demo 待优化 -->
      <div class="code-container">
        <transition name="fade">
          <div
            v-show="isExpand"
            class="docs-code"
          >
            <div
              class="description"
              v-show="$slots.description"
            >
              <slot name="description"></slot>
            </div>
            <div class="highlight-wrapper">
              <slot name="highlight"></slot>
            </div>
          </div>
        </transition>
      </div>
      <div
        class="docs-trans"
        @mouseenter="btnEnter"
        @mouseleave="btnLeave"
      >
        <transition name="arrow-text">
          <div class="btn-box">
            <ce-icon
              v-show="!showBtn && !isExpand"
              name="code"
              :size="16"
            ></ce-icon>
          </div>
        </transition>
        <transition name="arrow-text">
          <div
            v-show="showBtn || isExpand"
            class="btn-box"
          >
            <ce-icon
              name="code"
              :size="16"
            ></ce-icon>
            <span
              class="btn-text"
              @click="toggle"
            >{{ btnText }}</span>
          </div>
        </transition>
        <transition name="arrow-text">
          <span
            v-show="showBtn && isExpand"
            class="codepen"
            @click="goCodepen"
          >{{ codepenText }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CeUi from '@lib/index'
import { stripStyle, stripScript, stripTemplate } from '@lib/utils/index'
const { version } = CeUi
export default {
  name: 'demo-block',
  data() {
    return {
      isExpand: false,
      showBtn: false,
      codepen: {
        script: '',
        html: '',
        style: ''
      }
    }
  },
  computed: {
    btnText() {
      console.log(this.$i18n)
      return this.$i18n.locale === 'zh'
        ? this.isExpand
          ? '隐藏代码'
          : '显示代码'
        : this.isExpand
        ? 'Hidden code'
        : 'Show code'
    },
    codepenText() {
      return this.$i18n.locale === 'zh' ? ' 在线运行' : 'Online runing'
    }
  },
  methods: {
    toggle() {
      this.isExpand = !this.isExpand
    },
    btnEnter() {
      this.showBtn = !this.showBtn
    },
    btnLeave() {
      this.showBtn = !this.showBtn
    },
    goCodepen() {
      // TODO: 去 codepen 运行代码
      const highlight = this.$slots.highlight
      if (highlight && highlight[0]) {
        let code = ''
        let cur = highlight[0]
        if (cur.elm && cur.elm.innerText) {
          code = cur.elm.innerText
        }
        if (code) {
          this.codepen.html = stripTemplate(code)
          this.codepen.script = stripScript(code)
          this.codepen.style = stripStyle(code)
        }
      }
      // since 2.6.2 use code rather than jsfiddle https://blog.codepen.io/documentation/api/prefill/
      const { script, html, style } = this.codepen
      const resourcesTpl =
        '<scr' +
        "ipt src='//unpkg.com/vue/dist/vue.js'></scr" +
        'ipt>' +
        '\n<scr' +
        `ipt src="//unpkg.com/ce-ui@${version}/lib/index.js"></scr` +
        'ipt>'
      let jsTpl = (script || '').replace(/export default/, 'var Main =').trim()
      let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`
      let cssTpl = `@import url("//unpkg.com/ce-ui@${version}/lib/theme-chalk/index.css");\n${(
        style || ''
      ).trim()}\n`
      jsTpl = jsTpl
        ? jsTpl + "\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')"
        : "new Vue().$mount('#app')"
      const data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl
      }
      const form =
        document.getElementById('fiddle-form') || document.createElement('form')
      while (form.firstChild) {
        form.removeChild(form.firstChild)
      }
      form.method = 'POST'
      form.action = 'https://codepen.io/pen/define/'
      form.target = '_blank'
      form.style.display = 'none'
      // 创建表单
      const input = document.createElement('input')
      input.setAttribute('name', 'data')
      input.setAttribute('type', 'hidden')
      input.setAttribute('value', JSON.stringify(data))
      // 添加到 body 中
      form.appendChild(input)
      document.body.appendChild(form)
      // 提交到codepen
      form.submit()
    }
  }
}
</script>

<style lang="stylus" scoped>
.code-demo
  padding 32px

.docs-code-wrapper
  width 100%

  & .code-container
    overflow hidden

    & .docs-code
      width 100%
      height auto
      box-sizing border-box
      font-size 14px
      background-color #f7f7f7
      border-top 1px solid #e2ecf4
      overflow-y auto

      & .description
        padding 20px
        box-sizing border-box
        border 1px solid #ebebeb
        border-radius 3px
        font-size 14px
        line-height 22px
        color #666
        word-break break-word
        margin 10px
        margin-bottom 0
        background-color #fff

        & .source
          display none

      & .highlight-wrapper
        display block
        padding 0 20px
        overflow-y auto

        div
          display none

  & .docs-trans
    width 100%
    text-align center
    display inline-block
    border-top 1px solid #e2ecf4
    color #c5d9e8
    font-size 12px
    padding 10px 0
    background-color #fafbfc
    position relative

    & .btn-box
      line-height 14px
      display inline

      & .btn-text
        padding-left 10px
        font-size 14px
        color rgb(64, 158, 255)
        cursor pointer

    & .codepen
      font-size 14px
      color rgb(64, 158, 255)
      position absolute
      right 10px
      cursor pointer

// code in and out style
.arrow-text-enter
  transition all 0.5s ease-out

.arrow-text-leave-active
  transition all 0.3s ease-out

.arrow-text-enter, .arrow-text-leave-active
  margin-left 50px
  opacity 0

.fade-enter-active
  transition opacity 0.3s ease-out

.fade-leave-active
  transition opacity 0.2s ease-out

.fade-enter, .fade-leave-active
  opacity 0
</style>
