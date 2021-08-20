import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"

const LevelSelectedStyled = styled.section`
  border: 5px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 7px;
  color: ${({ theme }) => theme.palette.common.grey20};
  ${displays.flexColumn};
  gap: 1rem;
  font-size: 1.5rem;
  padding: 1rem;

  & .row {
    ${displays.flexBase};
    gap: 1rem;
  }

  & .header-level {
  }

  & .turns-info {
    font-size: 2rem;
  }
`

export default LevelSelectedStyled
