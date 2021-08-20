import { css } from "styled-components"

export const greyScale = {
  transparentGrey: "rgba(44,44,44,0.58)",
  grey5: "#ECEDF1",
  grey10: "#E5E7ED",
  grey20: "#CBCCD8",
  grey30: "#A1A2BA",
  grey40: "#81819F",
  grey50: "#656182",
  grey60: "#3E405B",
  grey70: "#333152",
  grey75: "#616369",
  grey80: "#2c2c2c",
  grey85: "#484848",
  grey90: "#222831",
}

export const fontSizes = { mainSize: "14px", secondsize: "16px" }

export const displays = {
  flexBase: css`
    display: flex;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,
}

export const breakpointsMedia = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
}
