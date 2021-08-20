export interface ITheme {
  palette: {
    common: {
      black: string
      white: string
      grey5: string
      grey10: string
      grey20: string
      grey30: string
      grey40: string
      grey50: string
      grey60: string
      grey70: string
      grey75: string
      grey80: string
      grey85: string
      grey90: string
    }
    primary: IPalette
    secondary: IPalette
    tertiary: IPalette
    quaternary: IPalette
  }

  button: {
    primary: IButton
    secondary: IButton
  }

  fontSizes: {
    mainSize: string
    secondsize: string
  }
}

interface IPalette {
  main: string
  contrastText?: string
}

interface IButton {
  text: string
  background: string
}
