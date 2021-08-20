import styled, { css } from "styled-components"
import { respondTo } from "../../../theme/base/mixins"

const CellStyled = styled.article<{ isSelected?: boolean; hasShip?: boolean }>`
  border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
  height: 30px;
  width: 30px;
  cursor: pointer;

  ${({ theme, isSelected, hasShip }) => {
    if (hasShip)
      return css`
        background: ${theme.palette.tertiary.main};
      `
    if (isSelected)
      return css`
        background: ${theme.palette.secondary.contrastText};
        pointer-events: none;
      `
  }}

  ${respondTo.xs`
    height: 46px;
    width: 46px;
  `}
`

export default CellStyled
