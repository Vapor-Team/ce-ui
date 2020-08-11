#!/usr/bin/env node

const execSync = require('child_process').execSync
const VERSION = require('../package.json').version
const ghPages = require('gh-pages')
/**
 * 获取最后一次commit message
 */
const GIT_COMMIT = execSync('git show -s --format=%s')
  .toString()
  .replace(/\n/, '')
execSync('npm run build:docs')
// 如遇提交失败使用该命令
// execSync("./node_modules/gh-pages/bin/gh-pages-clean")
// 将构建好 文档页面放置到 git gh-page 分支上，使用 ssh
ghPages.publish('dist', {
  push: true,
  branch: 'gh-pages',
  repo: 'git@github.com:Vapor-Team/ce-ui.git',
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
})
