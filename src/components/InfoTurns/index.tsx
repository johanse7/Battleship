import { IInfoTurns } from "../../interfaces/IInfoTurns"
import InforTurnStyled from "./InforTurn.styled"

const InfoTurns = ({ ships, turnUsed }: IInfoTurns) => (
  <InforTurnStyled>
    <h3>Ships {ships} </h3>
    <p>
      Trurns: <span className="turns">{turnUsed}</span>
    </p>
  </InforTurnStyled>
)

export default InfoTurns
