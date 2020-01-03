import styled from "styled-components";
import { theme } from "../styles/theme";

export const Date = styled(`p`)`
  font-weight: ${theme.fontWeights.extraLight};
  font-style: italic;
  font-size: ${theme.fontSizes["4"]};
  padding-top: ${theme.spacings["1"]};
  font-family: ${theme.fonts.secondary};
`;
