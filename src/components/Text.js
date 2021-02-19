import styled from "styled-components";

export const Text = styled("p")`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes["6"]};
  font-family: ${(props) => props.theme.fonts.primary};
  margin: 0;
`;
