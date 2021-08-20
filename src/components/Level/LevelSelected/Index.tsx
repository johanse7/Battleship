import { useContext } from "react"
import { GlobalContextState } from "../../../context/contexts/GlobalContextState"
import LevelNumberStyled from "../../../theme/common/LevelNumber.styled"
import LevelSelectedStyled from "./LevelSeleted.styled"

const LevelSelected = () => {
  const {
    selectedLevel: { state },
  } = useContext(GlobalContextState)

  return (
    <LevelSelectedStyled>
      <div className="row">
        <LevelNumberStyled>{state.id}</LevelNumberStyled>
        <p>{state.name}</p>
      </div>
      <div className="row">
        <p>
          <span className="turns-info">
            {state.turns === undefined ? `Infinite` : state.turns}!!
          </span>{" "}
          turns
        </p>
      </div>
    </LevelSelectedStyled>
  )
}
export default LevelSelected
