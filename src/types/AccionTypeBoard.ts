import { IBoardState } from "../interfaces/IBoard"
import { ICell } from "../interfaces/ICell"

export type AccionBoardType =
  | {
      type: "SET_BOARD"
      payload: Array<Array<ICell>>
    }
  | { type: "ADD_TURN" }
  | { type: "ADD_SHIP_SHOOTED" }
  | {
      type: "FINISH_GAME"
      win: boolean
    }
  | {
      type: "RESET_GAME"
      payload: IBoardState
    }
