import styled from "styled-components"
import { GiBattleship } from "react-icons/gi"
import { FaCheck, FaPlay } from "react-icons/fa"
import { RiCloseLine, RiErrorWarningLine, RiGamepadFill } from "react-icons/ri"
import { IoSettingsSharp } from "react-icons/io5"

export const Battleship = styled(GiBattleship)`
  color: ${({ theme }) => theme.palette.primary.main};
`
export const IconPlay = styled(FaPlay)`
  color: ${({ theme }) => theme.palette.primary.main};
`
export const IconClose = styled(RiCloseLine)``

export const IconError = styled(RiErrorWarningLine)``

export const IconCheck = styled(FaCheck)``

export const IconSettings = styled(IoSettingsSharp)``

export const IconGame = styled(RiGamepadFill)``
