import { createContext } from "react"
import { globalInitState } from "../inits/GlobalStateInit"
import { GlobalStateType } from "../types/GlobalStateType"

export const GlobalContextState = createContext<GlobalStateType>(
  globalInitState(),
)
