import styled from "styled-components";
import { theme } from "../styles/theme";

export const Text = styled("p")`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes["4"]};
  margin-top: ${theme.spacing["5"]};
  margin: 0;
`;
