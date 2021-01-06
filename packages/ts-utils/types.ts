/*
 * @Author: Mark
 * @Date: 2020-07-14 16:08:40
 * @LastEditors: Mark
 * @LastEditTime: 2020-12-02 20:38:06
 * @Description: 公共类型
 */
import { Properties } from 'csstype'
type CSSStyle = Properties
type LogType = 'log' | 'warn' | 'error' | 'assert' | 'info'
type IconType = 'outline' | 'logo' | 'filled' | 'sharp'
type MaskType = 'click' | 'mousewheel'

interface EmptyObject<T> {
  [key: string]: T
}

export { CSSStyle, LogType, EmptyObject, MaskType, IconType }
