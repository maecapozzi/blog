import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import { themes } from "../styles/theme";
import { GlobalStyle } from "../components/GlobalStyle";
import window from "window-or-global";

const Nav = styled("nav")`
  background: ${props => props.theme.colors.background};
  display: flex;
  height: ${props => props.theme.spacings["8"]};
  box-shadow: 0 1px 3px ${props => props.theme.colors.primary};
  position: fixed;
  width: 100%;
  z-index: 1;
  align-items: center;

  a {
    color: ${props => props.theme.colors.primary};
  }
  
}
`;

const Footer = styled.footer`
  text-align: center;
  padding: ${props => props.theme.spacings["4"]};
`;

const Space = styled.span`
  margin: ${props => props.theme.spacings["2"]};
`;

const NavItems = styled.div`
  margin: 0 ${props => props.theme.spacings["5"]};
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: ${props => props.theme.spacings["5"]};
`;

const ThemeButton = styled.button`
  border-radius: 0.25em;
  border: 1px solid ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
`;

const Layout = ({ children }) => {
  const originalTheme = Object.keys(themes)[0];
  const [themeIndex, setThemeIndex] = useState(1);
  const [theme, setTheme] = useState(
    (window &&
      window.sessionStorage &&
      JSON.parse(window.sessionStorage.getItem("theme"))) ||
      themes[originalTheme]
  );
  const [themeName, setThemeName] = useState(
    (window &&
      window.sessionStorage &&
      JSON.parse(window.sessionStorage.getItem("themeName"))) ||
      originalTheme
  );

  if (window && window.sessionStorage) {
    window.sessionStorage.setItem("theme", JSON.stringify(theme));
    window.sessionStorage.setItem("themeName", JSON.stringify(themeName));

    const getTheme = () => {
      Object.keys(themes).map((themeName, index) => {
        if (themeIndex === index) {
          setTheme(themes[themeName]);
          setThemeName(themeName);
        }
      });
    };

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav>
            <NavItems>
              <StyledGatsbyLink to="/">Home</StyledGatsbyLink>
              <Space></Space>
              <StyledGatsbyLink to="/about">About Me</StyledGatsbyLink>
              <Space></Space>
              <StyledGatsbyLink to="/work">Work</StyledGatsbyLink>
            </NavItems>
            <ButtonWrapper>
              <ThemeButton
                aria-label="Select a theme"
                onClick={() => {
                  themeIndex < Object.keys(themes).length - 1
                    ? setThemeIndex(themeIndex + 1)
                    : setThemeIndex(0);

                  getTheme(themeIndex + 1);
                }}
              >
                {themeName}
              </ThemeButton>
            </ButtonWrapper>
          </Nav>
          {children}
          <Footer>All content © Mae Capozzi</Footer>
        </ThemeProvider>
      </>
    );
  }
  return null;
};

export default Layout;
