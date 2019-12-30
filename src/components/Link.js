import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../styles/theme";

export const StyledGatsbyLink = styled(Link)`
  color: ${theme.colors.tertiary};
  font-size: ${theme.fontSizes["6"]};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const StyledExternalLink = styled("a")`
  color: ${theme.colors.tertiary};
  font-size: ${theme.fontSizes["4"]};

  &:hover {
    color: ${theme.colors.primary};
  }
`;
