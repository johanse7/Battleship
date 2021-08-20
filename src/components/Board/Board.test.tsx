import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { IPlayedGame } from "../../interfaces/IPlayedGame"
import InitStateBoardGame from "../../hooks/Board/InitStateBoardGame"
import { configEnv } from "../../config/configEnv"
import Board from "."
import { defaultTheme } from "../../theme/ThemeUI"

test("click to board", () => {
  const { buildBoard } = InitStateBoardGame({
    size: Number(configEnv.size),
    maxLengthShips: Number(configEnv.maxLengthShips),
  })
  const mockHandler = jest.fn()

  const component = render(
    <ThemeProvider theme={defaultTheme}>
      <Board finishedGame={false} onClickCell={mockHandler} matrix={buildBoard().board} />,
    </ThemeProvider>,
  )

  const cells = component.container.querySelectorAll("article")

  if (cells) cells.forEach((cell) => fireEvent.click(cell))

  expect(mockHandler.call.length)
})
