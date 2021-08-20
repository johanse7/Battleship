import { ILevel } from "./ILevel"

export interface ILevelCard {
  onclickLevel: (level: ILevel) => void
  selected: boolean
}
