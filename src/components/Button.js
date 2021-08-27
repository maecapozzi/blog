import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.highlight};
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["5"]};
  height: ${(props) => props.theme.spacings["7"]};
  width: 100%;

  ${mediaQueries.TABLET_PORTRAIT`
    width: ${(props) => props.theme.spacings["10"]};
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
