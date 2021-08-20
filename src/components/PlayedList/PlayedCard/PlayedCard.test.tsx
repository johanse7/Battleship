import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../../theme/ThemeUI"
import { IPlayedGame } from "../../../interfaces/IPlayedGame"
import PlayedCard from "./"

test("render icon played card ", () => {
  const card: IPlayedGame = {
    levelName: "Easy level",
    turns: 20,
    win: true,
  }

  const component = render(
    <ThemeProvider theme={defaultTheme}>
      <PlayedCard {...card} />
    </ThemeProvider>,
  )

  component.container.querySelector("svg")
})
