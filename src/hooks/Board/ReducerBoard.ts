import { IBoardState } from "../../interfaces/IBoard"
import { AccionBoardType } from "../../types/AccionTypeBoard"

const reducerBoard = (state: IBoardState, action: AccionBoardType): IBoardState => {
  switch (action.type) {
    case "SET_BOARD":
      return {
        ...state,
        board: action.payload,
      }
    case "ADD_TURN":
      return {
        ...state,
        turnsUsed: state.turnsUsed + 1,
      }

    case "ADD_SHIP_SHOOTED":
      return {
        ...state,
        shootDown: state.shootDown + 1,
      }
    case "FINISH_GAME":
      return {
        ...state,
        resultGame: {
          win: action.win,
        },
      }

    case "RESET_GAME":
      return action.payload
    default:
      return state
  }
}

export default reducerBoard
