import { ThemeProvider } from "styled-components"
import GlobalSateProvider from "../context/Providers/GlobalSateProvider"
import AppRouter from "../routes/AppRouter"
import GlobalStyled from "../theme/base/GlobalStyled"
import { defaultTheme } from "../theme/ThemeUI"

const AppContainer = () => {
  return (
    <GlobalSateProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <AppRouter />
      </ThemeProvider>
    </GlobalSateProvider>
  )
}

export default AppContainer
