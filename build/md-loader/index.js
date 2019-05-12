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
				const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
				if (tokens[idx].nesting === 1) {
					const description = m && m.length > 1 ? m[1] : ""
					const content =
						tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : ""
					return `<demo-block>
										<div v-show="false" slot="code">${markdownIt.render(content)}</div>
										<div v-if="${!!description}" slot="description">${markdownIt.render(
						description
					)}</div>
										<div slot="highlight">`
				}
				return "</div></demo-block>\n"
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
