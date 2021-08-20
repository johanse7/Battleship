import { useLocation } from "react-router-dom"
import { Battleship, IconGame, IconSettings } from "../../../theme/common/Icons.styled"
import { Linktyled } from "../../../theme/common/Link"
import HeaderStyled, { HeaderSettingsStyled } from "./Header.styled"

const Header = () => {
  const location = useLocation()

  return (
    <HeaderStyled>
      <div className="title">
        <p>Battleship</p>
        <Battleship />
      </div>

      {location.pathname === "/" && (
        <Linktyled to="/playedlist">
          <HeaderSettingsStyled>
            <IconGame />
            <span>Played games</span>
          </HeaderSettingsStyled>
        </Linktyled>
      )}

      {(location.pathname.includes("board") || location.pathname.includes("playedlist")) && (
        <Linktyled to="/">
          <HeaderSettingsStyled>
            <IconSettings />
            <span>Settings</span>
          </HeaderSettingsStyled>
        </Linktyled>
      )}
    </HeaderStyled>
  )
}

export default Header
