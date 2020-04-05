import styled from "styled-components";

export const Date = styled(`p`)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes["4"]};
  padding-top: ${(props) => props.theme.spacings["2"]};
  font-family: ${(props) => props.theme.fonts.primary};
`;
