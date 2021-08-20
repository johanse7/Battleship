import styled, { css } from "styled-components"
import { IPropsButton } from "../../interfaces/IPropsButton"
import { beatAnimation } from "../base/Animation"
import { displays } from "../base/Variables"

export const Button = styled.button<IPropsButton>`
  background: ${({ variant, theme }) => theme.button[variant].background};
  border-radius: 8px;
  border: 0;
  color: ${({ variant, theme }) => theme.button[variant].text};
  ${displays.flexCenter};
  font-size: 1.5rem;
  font-weight: 700;
  gap: 0.7rem;
  height: 60px;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  transition: all 500ms ease-out;
  user-select: none;
  width: 200px;
  text-transform: uppercase;

  & .icon {
    font-size: 3rem;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.common.grey80};
    border: 1px solid ${({ theme }) => theme.palette.common.white};
  }

  &:active {
    transform: scale(0.9);
  }

  ${({ hasAnimateBeat }) =>
    hasAnimateBeat &&
    css`
      animation: ${beatAnimation} 0.7s infinite alternate;
    `}
`
