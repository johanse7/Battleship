import { generateRandomNumber } from "../../helpers/Utils"
import { IBoardState, IBoardConfig } from "../../interfaces/IBoard"
import { ICell } from "../../interfaces/ICell"
import { IPointShip, IShip } from "../../interfaces/IShip"

const DIRECTION = ["left", "right", "up", "down"] as const

const InitStateBoardGame = ({ size, maxLengthShips }: IBoardConfig) => {
  let board: Array<Array<ICell>> = []

  const buildBoard = (): IBoardState => {
    board = new Array<Array<ICell>>(size).fill(
      new Array<ICell>(size).fill({
        positionX: 0,
        positionY: 0,
        isSelected: false,
        hasShip: false,
      }),
    )
    board = board.map((itemx, i) =>
      itemx.map((_, j) => ({
        positionX: i,
        positionY: j,
        isSelected: false,
        hasShip: false,
      })),
    )

    const { ships, countBlockShip } = createShipsCoodinates(maxLengthShips)

    ships.forEach((ship) => {
      addShipsToBoard(ship)
    })

    return {
      board,
      resultGame: null,
      shootDown: 0,
      turnsUsed: 0,
      countBlockShip,
    }
  }

  const createShipsCoodinates = (maxLengthShips: number) => {
    const ships: Array<IShip> = []
    let shiptsCount = 1
    let countBlockShip: number = 0

    while (maxLengthShips > 0) {
      for (let index = 0; index < shiptsCount; index++) {
        ships.push({ countCells: maxLengthShips })
        countBlockShip += maxLengthShips
      }
      maxLengthShips--
      shiptsCount++
    }

    return { ships, countBlockShip }
  }
  const addShipsToBoard = (ship: IShip) => {
    const boardClone = JSON.parse(JSON.stringify(board))
    const direction = getDireccion()

    const initPoint: IPointShip = {
      x: generateRandomNumber(size - 1),
      y: generateRandomNumber(size - 1),
    }
    let currentPoint: IPointShip = {
      x: 0,
      y: 0,
    }

    for (let index = 0; index < ship.countCells; index++) {
      const point = index === 0 ? initPoint : getNextPoint(currentPoint, direction)

      if (!point) throw new Error("invalid point")

      if (!isValidPoint(boardClone, point)) {
        addShipsToBoard(ship)
        return
      }
      currentPoint = point
      boardClone[point.x][point.y].hasShip = true
    }

    board = boardClone
  }

  const isValidPoint = (boardClone: Array<Array<ICell>>, point: IPointShip) => {
    if (!board[point.x] || !board[point.x][point.y]) {
      return false
    }

    if (boardClone[point.x][point.y].hasShip && board[point.x][point.y].hasShip) {
      return false
    }

    return true
  }

  const getNextPoint = (currentPoint: IPointShip, direction: string) => {
    const point = {
      left: {
        x: currentPoint.x,
        y: currentPoint.y - 1,
      },
      right: {
        x: currentPoint.x,
        y: currentPoint.y + 1,
      },
      up: {
        x: currentPoint.x - 1,
        y: currentPoint.y,
      },
      down: {
        x: currentPoint.x + 1,
        y: currentPoint.y,
      },
    }
    const nextPoint = point[direction as keyof typeof point]
    return nextPoint
  }

  const getDireccion = (): string => {
    const index = generateRandomNumber(DIRECTION.length)
    return DIRECTION[index]
  }

  return {
    buildBoard,
  }
}

export default InitStateBoardGame
