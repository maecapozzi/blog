import styled from "styled-components";
import { theme } from "../styles/theme";

export const Main = styled("main")`
  margin: 0 auto;
  padding: ${theme.spacings["4"]};
  max-width: 800px;
  min-width: 400px;
`;
