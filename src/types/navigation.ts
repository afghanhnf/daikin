export interface NavChild {
  labelKey: string
  path: string
  icon?: string
  description?: string
  disabled?: boolean
}

export interface NavItem {
  labelKey: string
  path: string
  children?: NavChild[]
  isMegaMenu?: boolean
  icon?: string
  disabled?: boolean
}
