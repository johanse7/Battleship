import { ITheme } from "../interfaces/ITheme"
import { greyScale, fontSizes } from "./base/Variables"

export const defaultTheme: ITheme = {
  palette: {
    common: {
      black: "#101010",
      white: "#ffffff",
      ...greyScale,
    },
    primary: {
      main: "#1EF400",
      contrastText: "#108800",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "rgb(20,90,4)",
    },
    tertiary: {
      main: "#4F1005",
    },
    quaternary: {
      main: "#FFD700",
    },
  },
  button: {
    primary: {
      text: greyScale.grey20,
      background: "#101010",
    },
    secondary: {
      background: greyScale.grey80,
      text: greyScale.grey20,
    },
  },

  fontSizes,
}
