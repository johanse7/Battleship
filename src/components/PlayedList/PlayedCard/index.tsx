import { IPlayedGame } from "../../../interfaces/IPlayedGame"
import { IconCheck, IconError } from "../../../theme/common/Icons.styled"
import PlayedCardStyled from "./PlayedCard.styled"

const PlayedCard = ({ levelName, turns, win }: IPlayedGame) => {
  return (
    <PlayedCardStyled win={win}>
      <div className="header">
        <p>{levelName}</p>
        {win ? <IconCheck /> : <IconError />}
      </div>
      <div className="body">
        <span>Turns used: </span>
        <span className="turns">{turns}!!</span>
      </div>
    </PlayedCardStyled>
  )
}

export default PlayedCard
