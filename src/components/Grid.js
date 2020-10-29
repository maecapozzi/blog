import styled from "styled-components";
import mediaQueries from "../utils/mediaQueries";

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
