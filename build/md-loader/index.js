"use strict"

const markdownIt = require("markdown-it")()
const MarkdownItContainer = require("markdown-it-container")
const MarkdownItCheckBox = require("markdown-it-task-checkbox")
const MarkdownItDec = require("markdown-it-decorate")
const mdLoaderConfig = [
	[
		MarkdownItContainer,
		"demo",
		{
			validate: params => {
				return params.trim().match(/^demo\s*(.*)$/)
			},
			render(tokens, idx) {
				if (tokens[idx].nesting === 1) {
					const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
					const description = m && m.length > 1 ? m[1] : ""
					// 2.获取代码块内的html和js代码
					let content = tokens[idx + 1].content
					// 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
					return `<demo-block>
										<div slot="demoContent">${content}</div>
										<div v-if="${!!description}" slot="description">${markdownIt.render(
						description
					)}</div>
										<div slot="highlight">`
				} else {
					return `</div>
										</demo-block>\n`
				}
			}
		}
	],
	[
		MarkdownItCheckBox,
		{
			disabled: false
		}
	],
	[MarkdownItDec]
]

module.exports = {
	mdLoaderConfig
}
