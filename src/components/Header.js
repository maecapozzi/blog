import styled from "styled-components";

export const Header = styled("h1")`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes["9"]};
  font-weight: ${props => props.theme.fontWeights.heavy};
  font-family: ${props => props.theme.fonts.secondary};
  text-decoration: none;
  line-height: ${props => props.theme.spacings["7"]};
`;

export const HeadingWrapper = styled(`div`)`
  margin-top: ${props => props.theme.spacings["9"]};
`;
