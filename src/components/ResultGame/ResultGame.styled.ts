import styled, { css } from "styled-components"
import { displays } from "../../theme/base/Variables"

const ResultGameStyled = styled.section<{ win: boolean }>`
  ${displays.flexColumn};
  /* background: white; */
  gap: 1rem;

  & .title {
    ${displays.flexBase};
    color: ${({ theme }) => theme.palette.common.grey20};
    gap: 1rem;
    font-size: 3rem;
    & svg {
      font-size: 3.5rem;
      ${({ theme, win }) =>
        win
          ? css`
              color: ${theme.palette.quaternary.main};
            `
          : css`
              color: ${theme.palette.tertiary.main};
            `}
    }
  }
`

export default ResultGameStyled
