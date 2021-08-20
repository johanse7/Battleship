export interface ICell {
  positionX: number
  positionY: number
  isSelected: boolean
  hasShip: boolean
}

export interface ICellExtend extends ICell {
  onClickCell: () => void
}
