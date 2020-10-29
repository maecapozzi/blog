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

export const LayoutGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const GridColumn = styled("div")`
  grid-column-start: ${(props) => props.columnStart[0]};
  grid-column-end: ${(props) => props.columnEnd[0]};

  ${mediaQueries.TABLET_PORTRAIT`
    grid-column-start: ${(props) => props.columnStart[1]};
    grid-column-end: ${(props) => props.columnEnd[1]};
  `}

  ${mediaQueries.DESKTOP`
    grid-column-start: ${(props) => props.columnStart[2]};
    grid-column-end: ${(props) => props.columnEnd[2]};
  `}
`;
