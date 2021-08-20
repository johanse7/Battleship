import { useReducer, useEffect, useContext, useRef } from "react"
import Modal from "../../components/Common/Modal/Modal"
import { GlobalContextState } from "../../context/contexts/GlobalContextState"
import { IBoardConfig } from "../../interfaces/IBoard"
import { ICell } from "../../interfaces/ICell"
import reducerBoard from "./ReducerBoard"
import initStateBoardGame from "./InitStateBoardGame"
const audioShipSooted = require("../../theme/assets/audios/explode.mp3")
const audioMissile = require("../../theme/assets/audios/missile_short.mp3")

const useBoardGame = ({ size, maxLengthShips }: IBoardConfig) => {
  const {
    selectedLevel: { state },
    playedGames: { state: palyedLists, dispatch: dispachPlayedGames },
  } = useContext(GlobalContextState)
  const refModal = useRef<React.ElementRef<typeof Modal>>(null)
  const { buildBoard } = initStateBoardGame({ size, maxLengthShips })
  const [boardGame, DispatchBoardGame] = useReducer(reducerBoard, buildBoard())

  const refAudioMissile = useRef(new Audio(audioMissile.default))
  const refAudioShipSooted = useRef(new Audio(audioShipSooted.default))

  useEffect(() => {
    if (boardGame.shootDown === boardGame.countBlockShip) {
      DispatchBoardGame({
        type: "FINISH_GAME",
        win: true,
      })

      refModal.current?.open()
      return
    }

    if (boardGame.turnsUsed === state.turns) {
      DispatchBoardGame({
        type: "FINISH_GAME",
        win: false,
      })

      refModal.current?.open()
    }
  }, [boardGame.shootDown, boardGame.countBlockShip, boardGame.turnsUsed, state.turns])

  useEffect(() => {
    if (boardGame.resultGame) {
      dispachPlayedGames([
        ...palyedLists,
        {
          win: boardGame.resultGame.win,
          levelName: state.name,
          turns: boardGame.turnsUsed,
        },
      ])
    }
    // eslint-disable-next-line
  }, [boardGame.resultGame])

  //events
  const handleClickCell = ({ positionX, positionY, hasShip }: ICell) => {
    refAudioMissile.current.currentTime = 0
    refAudioShipSooted.current.pause()
    refAudioShipSooted.current.currentTime = 0

    const boardClone = [...boardGame.board]

    if (boardClone[positionX][positionY].isSelected) return

    boardClone[positionX][positionY].isSelected = true

    refAudioMissile.current.play()

    DispatchBoardGame({ type: "SET_BOARD", payload: boardClone })

     DispatchBoardGame({ type: "ADD_TURN" })

    if (hasShip) {
      refAudioShipSooted.current.play()
      DispatchBoardGame({ type: "ADD_SHIP_SHOOTED" })
    }
  }

  const handleClickPlayAgain = () => {
    DispatchBoardGame({ type: "RESET_GAME", payload: buildBoard() })
    refModal.current?.close()
  }

  return {
    boardGame,
    refModal,
    handleClickCell,
    handleClickPlayAgain,
  }
}

export default useBoardGame
