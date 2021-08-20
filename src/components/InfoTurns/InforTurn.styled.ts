import styled from "styled-components"
import { displays } from "../../theme/base/Variables"

const InforTurnStyled = styled.section`
  ${displays.flexCenter}
  gap: 1rem;
  font-size: 1.3rem;

  & .turns {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 2rem;
    font-weight: bolder;
  }
`

export default InforTurnStyled
