<template>
  <div class="docs-code-wrapper">
    <div class="code-container">
      <transition name="fade">
        <div
          v-if="isExpand"
          class="docs-code"
        >
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
      <div class="btn-box">
        <ce-icon
          v-if="!showBtn && !isExpand"
          name="code"
          :size="16"
        ></ce-icon>
      </div>
      <transition name="arrow-text">
        <div
          v-if="showBtn || isExpand"
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
          v-if="showBtn || isExpand"
          class="codepen"
          @click="goNowCode"
        >在线运行</span>
      </transition>
    </div>
  </div>
</template>

<script>
import CeUi from "@#/index"
import { stripStyle, stripScript, stripTemplate } from "@#/utils/index"
const { version } = CeUi
export default {
	name: "demo-block",
	data() {
		return {
			isExpand: false,
			showBtn: false,
			btnText: "显示代码",
			codepen: {
				script: "",
				html: "",
				style: ""
			}
		}
	},
	mounted() {
		const highlight = this.$slots.highlight
		if (highlight && highlight[0]) {
			let code = ""
			let cur = highlight[0].children[0]
			if (cur.tag === "pre" && (cur.children && cur.children[0])) {
				cur = cur.children[0]
				if (cur.tag === "code") {
					code = cur.children[0].text
				}
			}
			if (code) {
				this.codepen.html = stripTemplate(code)
				this.codepen.script = stripScript(code)
				this.codepen.style = stripStyle(code)
			}
		}
	},
	methods: {
		toggle() {
			this.isExpand = !this.isExpand
			this.btnText = this.isExpand ? "隐藏代码" : "显示代码"
		},
		btnEnter() {
			this.showBtn = !this.showBtn
		},
		btnLeave() {
			this.showBtn = !this.showBtn
		},
		goNowCode() {
			// TODO: 去 codepen 运行代码

			console.log(this.$slots.highlight)

			console.log(this.codepen)
			// since 2.6.2 use code rather than jsfiddle https://blog.codepen.io/documentation/api/prefill/
			const { script, html, style } = this.codepen
			const resourcesTpl =
				"<scr" +
				"ipt src='//unpkg.com/vue/dist/vue.js'></scr" +
				"ipt>" +
				"\n<scr" +
				`ipt src="//unpkg.com/ce-ui@${version}/lib/index.js"></scr` +
				"ipt>"
			let jsTpl = (script || "").replace(/export default/, "var Main =").trim()
			let htmlTpl = `${resourcesTpl}\n<div id="app">\n${html.trim()}\n</div>`
			let cssTpl = `@import url("//unpkg.com/ce-ui@${version}/lib/theme-chalk/index.css");\n${(
				style || ""
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
				document.getElementById("fiddle-form") || document.createElement("form")
			while (form.firstChild) {
				form.removeChild(form.firstChild)
			}
			form.method = "POST"
			form.action = "https://codepen.io/pen/define/"
			form.target = "_blank"
			form.style.display = "none"

			const input = document.createElement("input")
			input.setAttribute("name", "data")
			input.setAttribute("type", "hidden")
			input.setAttribute("value", JSON.stringify(data))

			form.appendChild(input)
			document.body.appendChild(form)

			form.submit()
		}
	}
}
</script>

<style lang="stylus" scoped>
.docs-code-wrapper
  width 100%

  & .code-container
    overflow hidden

    & .docs-code
      width 100%
      height auto
      // transition all 1s linear
      box-sizing border-box
      font-size 14px
      background-color #f7f7f7
      border 1px solid #e2ecf4
      border-top none

      & .highlight-wrapper
        display block
        padding 0 20px
        overflow-y auto

  & .docs-trans
    width 100%
    text-align center
    display inline-block
    color #c5d9e8
    font-size 12px
    padding 10px 0
    background-color #fafbfc
    margin-bottom 10px
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
  transition all 0.2s ease-out

.arrow-text-leave-active
  transition all 0.2s ease-out

.arrow-text-enter, .arrow-text-leave-active
  margin-left 50px
  opacity 0
</style>
