import styled from "styled-components";

export const Date = styled(`p`)`
  font-weight: ${props => props.theme.fontWeights.extraLight};
  font-style: italic;
  font-size: ${props => props.theme.fontSizes["4"]};
  padding-top: ${props => props.theme.spacings["1"]};
  font-family: ${props => props.theme.fonts.secondary};
`;
