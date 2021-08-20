import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { IPlayedGame } from "../../interfaces/IPlayedGame"
import PlayedList from "./"
import { defaultTheme } from "../../theme/ThemeUI"

test("renders content", () => {
  const playedlist: Array<IPlayedGame> = [
    {
      levelName: "Easy level",
      turns: 30,
      win: false,
    },
    {
      levelName: "Easy level",
      turns: 20,
      win: true,
    },
  ]

  const component = render(
    <ThemeProvider theme={defaultTheme}>
      <PlayedList playedList={playedlist} />
    </ThemeProvider>,
  )

  expect(component.container.querySelectorAll("article")).toHaveLength(playedlist.length)
})
