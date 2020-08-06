export interface TabNavEvent extends TabNavOptions {
  event: MouseEvent
}

export interface TabNavOptions extends TabItem {
  ref?: HTMLElement
  index: number
  active: boolean
}

export interface TabItem {
  label?: string
  name: string | number
  name_: string | number
}
