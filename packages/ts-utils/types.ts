/*
 * @Author: Mark
 * @Date: 2020-07-14 16:08:40
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-06 01:42:32
 * @Description: 公共类型
 */
import { Properties } from 'csstype'
type CSSStyle = Properties
type LogType = 'log' | 'warn' | 'error' | 'assert' | 'info'
interface EmptyObject<T> {
  [key: string]: T
}
export { CSSStyle, LogType, EmptyObject }
