import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../styles/theme";

export const StyledGatsbyLink = styled(Link)`
  color: #ffffff;
  font-size: ${theme.fontSizes["4"]};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.tertiary};
  }
`;

export const StyledExternalLink = styled("a")`
  color: ${theme.colors.tertiary};
  font-size: ${theme.fontSizes["4"]};

  &:hover {
    color: ${theme.colors.primary};
  }
`;
