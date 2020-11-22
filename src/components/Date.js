import styled from "styled-components";

export const Date = styled(`p`)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes["2"]};
  margin: ${(props) =>
    `${props.theme.spacings["2"]} 0 ${props.theme.spacings["4"]} 0`};
  font-style: italic;
`;
