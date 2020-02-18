import styled from "styled-components";

export const Text = styled("p")`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes["4"]};
  margin-top: ${props => props.theme.spacings["5"]};
  margin: 0;
`;
