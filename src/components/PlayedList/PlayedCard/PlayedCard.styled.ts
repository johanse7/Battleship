import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"

const PlayedCardStyled = styled.article<{ win: boolean }>`
  background: ${({ theme }) => theme.palette.common.black};
  border: 2px solid
    ${({ theme, win }) => (win ? theme.palette.quaternary.main : theme.palette.tertiary.main)};

  color: ${({ theme }) => theme.palette.common.grey20};
  ${displays.flexColumn};
  align-items: stretch;
  gap: 1rem;

  & .header {
    ${displays.flexCenter};
    font-size: 1.2rem;
    gap: 1rem;
    & > svg {
      font-size: 3rem;
      color: ${({ theme, win }) =>
        win ? theme.palette.primary.contrastText : theme.palette.tertiary.main};
      font-weight: bold;
    }
  }
  & .body {
    ${displays.flexBase};
    gap: 1rem;

    & .turns {
      font-size: 2rem;
      color: ${({ theme, win }) =>
        win ? theme.palette.primary.contrastText : theme.palette.tertiary.main};
      font-weight: bold;
    }
  }

  padding: 1rem; ;
`

export default PlayedCardStyled
