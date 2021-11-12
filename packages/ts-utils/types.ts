/*
 * @Author: Mark
 * @Date: 2020-07-14 16:08:40
 * @LastEditors: Mark
 * @LastEditTime: 2021-01-08 16:03:33
 * @Description: 公共类型
 */
import { Properties } from 'csstype'

export type CSSStyle = Properties
export type LogType = 'log' | 'warn' | 'error' | 'assert' | 'info'
export type IconType = 'outline' | 'logo' | 'filled' | 'sharp'
export type MaskType = 'click' | 'mousewheel'

export interface EmptyObject<T> {
  [key: string]: T
}
