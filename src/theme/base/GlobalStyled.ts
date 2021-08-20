import { createGlobalStyle, css } from "styled-components"
import { respondTo } from "./mixins"

const GlobalStyled = createGlobalStyle`

html{
${({ theme }) => {
  return css`
    font-size: ${theme.fontSizes.mainSize};
    ${respondTo.sm`
          font-size: ${theme.fontSizes.secondsize};
      `}
  `
}}

}

body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ theme }) => theme.palette.common.grey90};
  color: ${({ theme }) => theme.palette.common.white};
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`

export default GlobalStyled
