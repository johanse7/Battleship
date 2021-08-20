import { IContextProps } from "../../interfaces/IContextProps"
import { ILevel } from "../../interfaces/ILevel"
import { IPlayedGame } from "../../interfaces/IPlayedGame"

export type GlobalStateType = {
  selectedLevel: IContextProps<ILevel, ILevel>
  playedGames: IContextProps<Array<IPlayedGame>, Array<IPlayedGame>>
}
