import styled from "styled-components";

export const Date = styled(`p`)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes["2"]};
  font-family: ${(props) => props.theme.fonts.primary};
  margin: ${(props) =>
    `${props.theme.spacings["1"]} 0 ${props.theme.spacings["3"]} 0`};
  font-style: italic;
`;
