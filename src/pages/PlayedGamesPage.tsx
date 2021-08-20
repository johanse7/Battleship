import { useContext } from "react"
import PlayedList from "../components/PlayedList"
import { GlobalContextState } from "../context/contexts/GlobalContextState"

const PlayedGamesPage = () => {
  const {
    playedGames: { state },
  } = useContext(GlobalContextState)

  return <PlayedList playedList={state} />
}

export default PlayedGamesPage
