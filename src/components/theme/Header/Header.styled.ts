import styled from "styled-components"
import { displays } from "../../../theme/base/Variables"

const HeaderStyled = styled.header`
  ${displays.flexBase};
  width: 100%;
  height: 60px;
  font-weight: 600;
  background: ${({ theme }) => theme.palette.common.black};
  font-size: 2rem;
  padding: 0 1rem;

  & .title {
    ${displays.flexCenter};
    gap: 0.3rem;
    flex-grow: 1;

    & > svg {
      font-size: 4rem;
    }
  }
`
export const HeaderSettingsStyled = styled.section`
  font-size: 1.2rem;
  ${displays.flexBase};
  gap: 0.3rem;
  color: ${({ theme }) => theme.palette.common.grey20};

  & > svg {
    font-size: 2rem;
  }
`

export default HeaderStyled
