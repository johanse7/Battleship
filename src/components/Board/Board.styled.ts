import styled, { css } from "styled-components"
import { displays } from "../../theme/base/Variables"

const BoardContenStyled = styled.section<{ finishedGame: boolean }>`
  ${displays.flexColumn};
  ${({ finishedGame }) =>
    finishedGame &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}

  & .row {
    ${displays.flexBase};
  }
`

export default BoardContenStyled
