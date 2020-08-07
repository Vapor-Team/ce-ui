/*
 * @Author: Mark
 * @Date: 2020-07-14 16:08:40
 * @LastEditors: Mark
 * @LastEditTime: 2020-08-07 00:43:05
 * @Description: 公共类型
 */
import { Properties } from 'csstype'
type CSSStyle = Properties
type LogType = 'log' | 'warn' | 'error' | 'assert' | 'info'
type IconType = 'outline' | 'logo' | 'filled' | 'sharp'

interface EmptyObject<T> {
  [key: string]: T
}
export { CSSStyle, LogType, EmptyObject, IconType }
