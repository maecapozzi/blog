import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.text};
  }
  
  html {   
    color: ${(props) => props.theme.colors.text};
  }

  blockquote p {
    display: inline;
  }

  blockquote {
    font-style: italic;
    border-left: 3px solid ${(props) => props.theme.colors.highlight};
    background-color: ${(props) => props.theme.colors.gray1};
    margin: 2em 10px;
    padding: 0.5em 10px;
  }

  li {
    margin-left: 24px;
    font-family: Inter;
    font-size: ${(props) => props.theme.fontSizes["3"]}
  }

  h1 {
    font-family: Inter;
  }

  h2 {
    font-family: Inter;
    font-size: ${(props) => props.theme.fontSizes["7"]}
  }

  h3 {
    font-family: Inter;
    font-size: ${(props) => props.theme.fontSizes["6"]}
  }
`;
