/*
 * @Author: Mark
 * @Date: 2021-01-08 16:04:08
 * @LastEditors: Mark
 * @LastEditTime: 2021-01-08 16:44:59
 * @Description: loading类型
 */
import Vue from 'vue'

export interface GlobalInstance {
  domInserted?: boolean
  domVisible?: boolean
  hide?: boolean
  instance?: Vue
  el?: Element
}

export interface LoadingInstance extends Vue {
  visible?: boolean
  hide?: boolean
  domVisible?: boolean
}
