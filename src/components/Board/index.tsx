import { IBoard } from "../../interfaces/IBoard"
import BoardContenStyled from "./Board.styled"
import Cell from "./Cell"

const Board = ({ matrix, onClickCell, finishedGame }: IBoard) => {
  return (
    <BoardContenStyled finishedGame={finishedGame}>
      {matrix.map((rowItem, i) => (
        <div className="row" key={`item-${i}`}>
          {rowItem.map((cell, j) => {
            return <Cell key={`item-${i}-${j}`} {...cell} onClickCell={() => onClickCell(cell)} />
          })}
        </div>
      ))}
    </BoardContenStyled>
  )
}

export default Board
