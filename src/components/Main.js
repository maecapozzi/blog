import styled from "styled-components";

export const Main = styled("main")`
  margin: 0 auto;
  padding: ${props => props.theme.spacings["4"]};
  max-width: 800px;
  min-width: 400px;
`;
