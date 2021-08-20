import { levelsData } from "../../config/Data/LevelsData"
import { STORAGE_STATE_GLOBAL } from "../../helpers/const"
import { GlobalStateType } from "../types/GlobalStateType"

export const globalInitState = (): GlobalStateType => {
  const storageState = localStorage.getItem(STORAGE_STATE_GLOBAL)

  const resultState = storageState && JSON.parse(storageState)

  return {
    selectedLevel: {
      state: resultState?.selectedLevel || levelsData[0],

      dispatch: () => null,
    },
    playedGames: {
      state: resultState?.playedGameList || [],
      dispatch: () => null,
    },
  }
}
