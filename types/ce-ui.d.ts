import Vue, { PluginObject } from 'vue'
export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of ce-ui */
export const version: string

/**
 * Install all ce-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(CeUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void
