import { useHistory } from "react-router-dom"
import LevelList from "../components/Level/LevelList/Index"
import LevelSelected from "../components/Level/LevelSelected/Index"
import { levelsData } from "../config/Data/LevelsData"
import { Button } from "../theme/common/Button"
import { IconPlay } from "../theme/common/Icons.styled"

const ConfigGamePage = () => {
  const history = useHistory()

  const handleClickPlay = () => history.push("/board")

  return (
    <>
      <LevelSelected />
      <LevelList levelList={levelsData} />
      <Button hasAnimateBeat onClick={handleClickPlay} variant="primary">
        <span>PLAY</span>
        <IconPlay className="icon" />
      </Button>
    </>
  )
}

export default ConfigGamePage
