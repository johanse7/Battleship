import { IPlayedList } from "../../interfaces/IPlayedList"
import PlayedCard from "./PlayedCard"
import PlayedListStyled, { TittleNoResultStyled } from "./PlayedList.styled"

export const PlayedList = ({ playedList }: IPlayedList) => {
  return (
    <>
      {playedList.length > 0 ? (
        <PlayedListStyled>
          {playedList.map(({ levelName, turns, win }, index) => (
            <PlayedCard
              key={`${levelName}-${index}`}
              levelName={levelName}
              turns={turns}
              win={win}
            />
          ))}
        </PlayedListStyled>
      ) : (
        <TittleNoResultStyled className="no-result">No results!</TittleNoResultStyled>
      )}
    </>
  )
}

export default PlayedList
