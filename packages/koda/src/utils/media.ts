/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, CSSObject, SimpleInterpolation } from "styled-components";

export const desktopWidth = 600;
export const mobileWidth = 599;
/*
export const desktopWidth = 375;
export const mobileWidth = 374;
*/

export const media = {
  desktop: (
    first: TemplateStringsArray | CSSObject,
    ...args: SimpleInterpolation[]
  ) => css`
    @media (min-width: ${desktopWidth}px) {
      ${css(first, ...args)};
    }
  `,
  mobile: (
    first: TemplateStringsArray | CSSObject,
    ...args: SimpleInterpolation[]
  ) => css`
    @media (max-width: ${mobileWidth}px) {
      ${css(first, ...args)};
    }
  `,
};
