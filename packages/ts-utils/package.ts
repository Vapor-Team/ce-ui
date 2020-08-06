/*
 * @Author: Mark
 * @Date: 2020-07-15 22:46:40
 * @LastEditors: Mark
 * @LastEditTime: 2020-07-15 23:30:41
 * @Description: 包配置
 */

import { version, name } from '../../package.json'
const config = {
  noConsole: false,
  noWarn: false
}
export { name, version, config }
export default {
  name,
  version,
  config
}
