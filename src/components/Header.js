import styled from "styled-components";
import { theme } from "../styles/theme";

export const Header = styled("h1")`
  font-size: ${theme.fontSizes["9"]};
  font-weight: ${theme.fontWeight.heavy};
  text-decoration: none;
  line-height: ${theme.spacing["6"]};
  margin-bottom: none;
`;

export const HeadingWrapper = styled(`div`)`
  margin: ${theme.spacing["8"]} ${theme.spacing["6"]};
`;
