import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  
  html {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  blockquote {
    font-style: italic;
    border-left: 3px solid #5746e7;
    background-color: #f1f1f1;
    margin: 2em 10px;
    padding: 0.5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
  }

  blockquote p {
    display: inline;
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`;
