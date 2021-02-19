import styled from "styled-components";
import { Link } from "gatsby";

export const StyledGatsbyLink = styled(Link)`
  color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const StyledExternalLink = styled("a")`
  color: ${(props) => props.theme.colors.highlight};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;
