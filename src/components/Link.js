import styled from "styled-components";
import { Link } from "gatsby";

export const StyledGatsbyLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes["4"]};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`;

export const StyledExternalLink = styled("a")`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes["4"]};

  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
`;
