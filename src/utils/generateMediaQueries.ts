/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, FlattenSimpleInterpolation } from "styled-components";

export type BreakpointValue = number | [number, number];

export type MediaQueryConfig<T extends string> = {
  [key in T]: BreakpointValue;
};
export type BreakpointObject<T extends string> = {
  [key in T | "HOVER"]: (
    l: TemplateStringsArray,
    ...p: any[]
  ) => FlattenSimpleInterpolation;
};

const buildMediaQueryFunction = (mediaQueryString: string) => (
  literals: TemplateStringsArray,
  ...placeholders: any[]
) =>
  css`
    ${mediaQueryString} {
      ${css(literals, ...placeholders)}
    }
  `;

const HoverQueryFunction = (
  literals: TemplateStringsArray,
  ...placeholders: any[]
) =>
  css`
    @media only screen and (hover: hover) {
      &:hover {
        ${css(literals, ...placeholders)}
      }
    }
  `;

const generateMediaQueryString = (breakpointValue: BreakpointValue) => {
  if (Array.isArray(breakpointValue)) {
    return `@media only screen and (min-width: ${breakpointValue[0]}px) and (max-width: ${breakpointValue[1]}px)`;
  }

  return `@media only screen and (min-width: ${breakpointValue}px)`;
};

const generateMediaQueries = <T extends string>(
  mediaQueryConfig: MediaQueryConfig<T>
): BreakpointObject<T> => {
  const returnObj = Object.entries(mediaQueryConfig).reduce(
    (
      breakpointObject: Partial<BreakpointObject<T>>,
      [breakpointName, breakpointValue]
    ) => {
      const mediaQueryString = generateMediaQueryString(
        breakpointValue as BreakpointValue
      );
      return Object.assign(breakpointObject, {
        [breakpointName]: buildMediaQueryFunction(mediaQueryString),
      });
    },
    {}
  ) as BreakpointObject<T>;

  returnObj.HOVER = HoverQueryFunction;
  return returnObj;
};

export default generateMediaQueries;
