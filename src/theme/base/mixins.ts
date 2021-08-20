import { css, CSSObject, FlattenInterpolation, SimpleInterpolation } from "styled-components"
import { breakpointsMedia } from "./Variables"

export const respondTo = Object.keys(breakpointsMedia).reduce((acc, key) => {
  acc[key as keyof typeof breakpointsMedia] = (
    literals: TemplateStringsArray | CSSObject,
    ...rest: SimpleInterpolation[]
  ) => css`
    @media (min-width: ${breakpointsMedia[key as keyof typeof breakpointsMedia]}) {
      ${css(literals, ...rest)}
    }
  `
  return acc
}, {} as Record<keyof typeof breakpointsMedia, (literals: TemplateStringsArray | CSSObject, ...rest: SimpleInterpolation[]) => FlattenInterpolation<any>>)
