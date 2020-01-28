"use strict"

module.exports = {
	// 类型
	types: [
		{
			value: "💪WIP",
			name: "💪 WIP: Work in progress"
		},
		{
			value: "✨feat",
			name: "✨ feat: A new feature"
		},
		{
			value: "🐞fix",
			name: "🐞 fix: A bug fix"
		},
		{
			value: "🛠refactor",
			name: "🛠 refactor: A code change that neither fixes a bug nor adds a feature"
		},
		{
			value: "📚docs",
			name: "📚 docs: Documentation only changes"
		},
		{
			value: "🏁test",
			name: "🏁 test: Add missing tests or correcting existing tests"
		},
		{
			value: "🗯chore",
			name: "🗯 chore: Changes that don't modify src or test files. Such as updating build tasks, package manager"
		},
		{
			value: "💅style",
			name: "💅 style: Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"
		},
		{
			value: "⏪revert",
			name: "⏪ revert: Revert to a commit"
		}
	],
	// 区别模块
	scopes: [
		{ name: 'components' },
		{ name: 'filters' },
		{ name: 'utils' }
	],
	// 提示消息
	// messages: {
	// 	type: '选择一种你的提交类型:',
	// 	scope: '选择修改涉及范围 (可选):',
	// 	// used if allowCustomScopes is true
	// 	customScope: '请输入本次改动的范围（如：功能、模块等）:',
	// 	subject: '简短说明:\n',
	// 	body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
	// 	breaking: '非兼容性，破坏性变化说明 (可选):\n',
	// 	footer: '关联关闭的issue，例如：#31, #34(可选):\n',
	// 	confirmCommit: '确定提交说明?'
	// },
	// override the messages, defaults are as follows
	messages: {
		type: 'Select the type of change that you\'re committing:',
		scope: '\nDenote the SCOPE of this change (optional):',
		// used if allowCustomScopes is true
		customScope: 'Denote the SCOPE of this change:',
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?'
	},
	allowCustomScopes: true,
	allowBreakingChanges: [ "feat", "fix" ],  // 仅在feat、fix时填写破坏性更改
	subjectLimit: 100, // limit subject length
	breaklineChar: '|'  // 设置body和footer中的换行符
}
