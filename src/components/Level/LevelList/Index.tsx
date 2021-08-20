import { useContext } from "react"
import { GlobalContextState } from "../../../context/contexts/GlobalContextState"
import { ILevel } from "../../../interfaces/ILevel"
import { ILevelList } from "../../../interfaces/ILevelList"
import LevelCard from "../LevelCard"
import LevelListStyled from "./LevelList.styled"

const LevelList = ({ levelList }: ILevelList) => {
  const {
    selectedLevel: { state, dispatch },
  } = useContext(GlobalContextState)

  const handleClicLevel = (level: ILevel) => {
    dispatch(level)
  }

  return (
    <LevelListStyled>
      {levelList.map(({ name, id, turns }) => (
        <LevelCard
          key={id}
          name={name}
          id={id}
          turns={turns}
          onclickLevel={handleClicLevel}
          selected={id === state.id}
        />
      ))}
    </LevelListStyled>
  )
}

export default LevelList
