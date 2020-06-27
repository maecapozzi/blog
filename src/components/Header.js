import styled from "styled-components";

export const Header = styled("h1")`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes["8"]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-decoration: none;
`;

export const HeadingWrapper = styled(`div`)`
  margin-top: ${(props) => props.theme.spacings["9"]};
`;
