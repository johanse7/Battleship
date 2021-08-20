import styled, { css } from "styled-components"
import { displays } from "../../../theme/base/Variables"

const selectedItemStyled = css`
  background: ${({ theme }) => theme.palette.common.grey80};
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  transform: scale(1);
`

const LevelCardStyled = styled.article<{ selected?: boolean }>`
  background: ${({ theme }) => theme.palette.common.black};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 7px;
  cursor: pointer;
  ${displays.flexCenter};
  height: 120px;
  padding: 1rem;
  transition: all 0.3s ease-out;
  width: 100%;
  transform: scale(0.9);

  &:hover {
    ${selectedItemStyled}
  }

  ${({ selected }) => selected && selectedItemStyled}

  & .level-name {
    font-size: 1.5rem;
    flex-grow: 1;
    text-align: center;
  }
`

export default LevelCardStyled
