import styled from "styled-components";
import { theme } from "../styles/theme";

export const Card = styled(`div`)`
  margin: ${theme.spacings["6"]} 0;
  padding-top: ${theme.spacings["3"]};
  border-radius: 5px;
  background: ${theme.colors.gray1};
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
`;
