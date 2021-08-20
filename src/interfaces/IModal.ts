import { ReactNode } from "react"

export interface IModal {
  defaultOpened?: boolean
  children: ReactNode
}

export interface IActions {
  open: () => void
  close: () => void
}
