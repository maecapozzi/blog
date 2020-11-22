import styled from "styled-components";
import { Link } from "gatsby";

export const StyledGatsbyLink = styled(Link)`
  color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const StyledExternalLink = styled("a")`
  color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
