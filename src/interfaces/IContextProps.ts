import { Dispatch } from "react"

export interface IContextProps<State, DispactActions> {
  state: State
  dispatch: Dispatch<DispactActions>
}
