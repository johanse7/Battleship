import { IPlayedList } from "../../interfaces/IPlayedList"
import PlayedCard from "./PlayedCard"
import PlayedListStyled from "./PlayedList.styled"

export const PlayedList = ({ playedList }: IPlayedList) => {
  return (
    <PlayedListStyled>
      {playedList.map(({ levelName, turns, win }, index) => (
        <PlayedCard key={`${levelName}-${index}`} levelName={levelName} turns={turns} win={win} />
      ))}
    </PlayedListStyled>
  )
}

export default PlayedList
