import { ICellExtend } from "../../../interfaces/ICell"
import CellStyled from "./Cell.styled"

const Cell = ({ hasShip, isSelected, onClickCell }: ICellExtend) => {
  return (
    <CellStyled isSelected={isSelected} hasShip={isSelected && hasShip} onClick={onClickCell} />
  )
}

export default Cell
