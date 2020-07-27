import styled, { css } from "styled-components";
import mediaQueries from "../utils/mediaQueries";

export const GridStyles = css`
  display: grid;
  grid-template-columns: repeat(12, minmax(1px, 1fr));
  grid-column-gap: 16px;

  ${mediaQueries.TABLET_PORTRAIT`
     grid-template-columns: [left] 15% repeat(10, minmax(16px, 1fr)) 15%[right];
  `}

  ${mediaQueries.DESKTOP`
     grid-template-columns: [left] 1fr repeat(10, minmax(16px, 60px)) 1fr [right];
  `}
`;

export const Grid = styled.div`
  ${GridStyles};
`;
