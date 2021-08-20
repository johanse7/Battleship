import React, { useState, useEffect } from "react"
import { STORAGE_STATE_GLOBAL } from "../../helpers/const"
import { ILevel } from "../../interfaces/ILevel"
import { IPlayedGame } from "../../interfaces/IPlayedGame"
import { GlobalContextState } from "../contexts/GlobalContextState"
import { globalInitState } from "../inits/GlobalStateInit"
import { GlobalStateType } from "../types/GlobalStateType"

const GlobalSateProvider: React.FC = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState<ILevel>(globalInitState().selectedLevel.state)
  const [playedGameList, setPlayedGameList] = useState<Array<IPlayedGame>>(
    globalInitState().playedGames.state,
  )

  useEffect(() => {
    
    if (selectedLevel && playedGameList.length > 0)
      localStorage.setItem(
        STORAGE_STATE_GLOBAL,
        JSON.stringify({
          selectedLevel,
          playedGameList,
        }),
      )
  }, [selectedLevel, playedGameList])

  const dataProvider: GlobalStateType = {
    selectedLevel: {
      state: selectedLevel,
      dispatch: setSelectedLevel,
    },
    playedGames: {
      state: playedGameList,
      dispatch: setPlayedGameList,
    },
  }

  return <GlobalContextState.Provider value={dataProvider}>{children}</GlobalContextState.Provider>
}

export default GlobalSateProvider
