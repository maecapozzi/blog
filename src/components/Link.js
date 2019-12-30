import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../styles/theme";

export const StyledGatsbyLink = styled(Link)`
  color: ${theme.colors.tertiary};
`;

export const StyledExternalLink = styled("a")`
  color: ${theme.colors.tertiary};
`;
