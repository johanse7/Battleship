import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { fireEvent, render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import LevelCard from "."
import { levelsData } from "../../../config/Data/LevelsData"
import { defaultTheme } from "../../../theme/ThemeUI"

test("Click level game", () => {
  const mockHandler = jest.fn()

  const component = render(
    <ThemeProvider theme={defaultTheme}>
      <LevelCard {...levelsData[0]} selected={true} onclickLevel={mockHandler} />
    </ThemeProvider>,
  )
  const cardLevlElement = component.container.querySelector("article")
  if (cardLevlElement) fireEvent.click(cardLevlElement)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})
