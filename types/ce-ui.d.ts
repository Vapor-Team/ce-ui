import Vue, { PluginObject } from 'vue'
import {
  CeUIComponent,
  CeUIComponentSize,
  CeUITabsPosition
} from './components'
import { TabNavEvent as CeUITabNavEvent } from '../packages/components/tab/type'
export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of ce-ui */
export const version: string

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/**
 * Install all ce-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(CeUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = CeUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = CeUIComponentSize

export type TabsPosition = CeUITabsPosition

export type TabNavEvent = CeUITabNavEvent
