import Vue from 'vue'

/** CeUI component common definition */
export declare class CeUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type CeUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Tabs Position */
export type CeUITabsPosition = 'left' | 'right' | 'top' | 'bottom'
