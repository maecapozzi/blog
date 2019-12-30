import styled from "styled-components";
import { theme } from "../styles/theme";

export const Header = styled("h1")`
  font-size: ${theme.fontSizes["9"]};
  font-weight: ${theme.fontWeights.heavy};
  text-decoration: none;
  line-height: ${theme.spacings["7"]};
`;

export const HeadingWrapper = styled(`div`)`
  margin-top: ${theme.spacings["9"]};
`;
