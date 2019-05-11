"use strict"
const MarkdownItContainer = require("markdown-it-container")
const MarkdownItCheckBox = require("markdown-it-task-checkbox")
const MarkdownItDec = require("markdown-it-decorate")

module.exports = [
	[
		MarkdownItContainer,
		"demo",
		{
			validate: params => {
				return params.trim().match(/^demo\s*(.*)$/)
			},
			render: function(tokens, idx) {
				if (tokens[idx].nesting === 1) {
					return `<demo-block>
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
