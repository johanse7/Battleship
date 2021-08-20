import { ILevel } from "../../../interfaces/ILevel"
import { ILevelCard } from "../../../interfaces/ILevelCard"
import LevelNumberStyled from "../../../theme/common/LevelNumber.styled"
import LevelCardStyled from "./LevelCard.styled"

const LevelCard = ({ name, id, selected, turns, onclickLevel }: ILevel & ILevelCard) => {
  const handleClick = () => {
    onclickLevel({
      name,
      id,
      turns,
    })
  }

  return (
    <LevelCardStyled onClick={handleClick} selected={selected}>
      <p className="level-name">{name}</p>
      <LevelNumberStyled>{id}</LevelNumberStyled>
    </LevelCardStyled>
  )
}

export default LevelCard
