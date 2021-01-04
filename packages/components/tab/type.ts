type TabNavMouseEvent = 'enter' | 'leave'

export interface TabNavEvent extends TabNavOptions {
  event: MouseEvent
}

export interface TabNavOptions extends TabItem {
  type?: TabNavMouseEvent
  ref?: HTMLElement
  index: number
  active: boolean
}

export interface TabItem {
  label?: string
  name: string | number
  name_: string | number
}
