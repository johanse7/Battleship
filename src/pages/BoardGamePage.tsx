import Board from "../components/Board"
import Modal from "../components/Common/Modal/Modal"
import LevelSelected from "../components/Level/LevelSelected/Index"
import ResultGame from "../components/ResultGame"
import { configEnv } from "../config/configEnv"
import useBoardGame from "../hooks/Board/UseBoardGame"
import { Button } from "../theme/common/Button"

const BoardGamePage = () => {
  const { boardGame, refModal, handleClickCell, handleClickPlayAgain } = useBoardGame({
    size: Number(configEnv.size),
    maxLengthShips: Number(configEnv.maxLengthShips),
  })

  return (
    <>
      <LevelSelected />
      <Board
        matrix={boardGame.board}
        onClickCell={handleClickCell}
        finishedGame={!!boardGame.resultGame}
      />
      <Button variant="primary" onClick={handleClickPlayAgain}>
        Reset game
      </Button>
      <Modal ref={refModal}>
        {boardGame.resultGame && (
          <ResultGame win={boardGame.resultGame.win} onClickPlayAgain={handleClickPlayAgain} />
        )}
      </Modal>
    </>
  )
}

export default BoardGamePage
