import { ICell } from "./ICell"

export interface IBoard {
  matrix: Array<Array<ICell>>
  finishedGame: boolean
  onClickCell: (cell: ICell) => void
}

export interface IBoardConfig {
  size: number
  maxLengthShips: number
}

export interface IBoardState {
  board: Array<Array<ICell>>
  turnsUsed: number
  shootDown: number
  countBlockShip: number
  ships: number
  resultGame: {
    win: boolean
  } | null
}
