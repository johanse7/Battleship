import styled from "styled-components"
import { displays } from "../base/Variables"

const LevelNumberStyled = styled.p`
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  ${displays.flexCenter};
  font-weight: 900;
  font-size: 2rem;
  height: 60px;
  width: 60px;
`

export default LevelNumberStyled
