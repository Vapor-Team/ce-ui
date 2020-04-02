'use strict'

module.exports = {
  // 类型
  types: [
    { value: '✨feat', name: '✨ feat:            一个新的特性' },
    { value: '🐛fix', name: '🐛 fix:             修复一个Bug' },
    { value: '📚docs', name: '📚 docs:            变更的只有文档' },
    { value: '💅style', name: '💅 style:           空格, 分号等格式修复' },
    {
      value: '🛠refactor',
      name: '🛠  refactor:        代码重构，注意和特性、修复区分开'
    },
    { value: '⚡️performance', name: '⚡️ performance:     提升性能' },
    { value: '🏁test', name: '🏁 test:            添加一个测试' },
    { value: '🎂release', name: '🎂 release:         发布版本' },
    {
      value: '🔧tool',
      name: '🔧 tool:            开发工具变动(构建、脚手架工具等)'
    },
    { value: '⏪revert', name: '⏪ revert:          代码回退' },
    {
      value: '🗯chore',
      name: '🗯  chore:           更改项目配置文件、更新依赖包等'
    },
    { value: '💪WIP', name: '💪 WIP:             工作进行中。。。' }
  ],
  // 区别模块
  scopes: [
    { name: 'components' },
    { name: 'pipe' },
    { name: 'project' },
    { name: 'docs' },
    { name: 'packages' },
    { name: 'utils' },
    { name: 'theme-style' }
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  // 提示消息
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择修改涉及范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '请输入本次改动的范围（如：功能、模块等）:',
    subject: '简短说明:\n',
    body: '详细说明，使用"|"分隔开可以换行(可选)：\n',
    breaking: '非兼容性，破坏性变化说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  // override the messages, defaults are as follows
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 仅在feat、fix时填写破坏性更改
  // limit subject length
  subjectLimit: 100
}
