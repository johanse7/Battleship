import { IResultGame } from "../../interfaces/IResultGame"
import { Button } from "../../theme/common/Button"
import { IconCheck, IconError } from "../../theme/common/Icons.styled"
import ResultGameStyled from "./ResultGame.styled"

const ResultGame = ({ win, onClickPlayAgain }: IResultGame) => {
  return (
    <ResultGameStyled win={win}>
      <div className="title">
        <h3>{win ? "You won!!" : "Game over!!"}</h3>
        {win ? <IconCheck /> : <IconError />}
      </div>
      <Button variant="secondary" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </Button>
    </ResultGameStyled>
  )
}

export default ResultGame
