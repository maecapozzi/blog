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

  blockquote p {
    display: inline;
  }

  blockquote {
    font-style: italic;
    border-left: 3px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.muted};
    margin: 2em 10px;
    padding: 0.5em 10px;
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`;
