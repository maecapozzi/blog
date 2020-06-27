import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import { themes } from "../styles/theme";
import { GlobalStyle } from "../components/GlobalStyle";

const Nav = styled("nav")`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  font-family: ${(props) => props.theme.fonts.primary};
  
  height: ${(props) => props.theme.spacings["8"]};
  position: fixed;
  width: 100%;
  z-index: 1;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.primary};
  }
  
}
`;

const Footer = styled.footer`
  text-align: center;
  padding: ${(props) => props.theme.spacings["4"]};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
`;

const Space = styled.span`
  margin: ${(props) => props.theme.spacings["2"]};
`;

const NavItems = styled.div`
  margin: 0 ${(props) => props.theme.spacings["5"]};
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: ${(props) => props.theme.spacings["5"]};
`;

const ThemeButton = styled.button`
  cursor: pointer;
  border-radius: 0.25em;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["2"]};

  &:hover {
    background: ${(props) => props.theme.colors.highlight};
  }
`;

const Layout = ({ children }) => {
  const [mode, setMode] = useState("light");
  return (
    <>
      <ThemeProvider theme={themes.tosh}>
        <GlobalStyle />
        <Nav>
          <NavItems>
            <StyledGatsbyLink to="/">
              <u>Mae Capozzi</u>
            </StyledGatsbyLink>
            <Space></Space>
            <StyledGatsbyLink to="/blog">Blog</StyledGatsbyLink>
            <Space></Space>
            <StyledGatsbyLink to="/about">About Me</StyledGatsbyLink>
            <Space></Space>
            <StyledGatsbyLink to="/work">Work</StyledGatsbyLink>
            <Space></Space>
            <StyledGatsbyLink to="/newsletter">Newsletter</StyledGatsbyLink>
          </NavItems>
          <ButtonWrapper>
            <ThemeButton
              aria-label="Select a theme"
              onClick={() => {
                const doc = document.documentElement;
                if (doc.classList.value === "inverted rotated") {
                  setMode("dark");
                  doc.classList.remove("inverted");
                  doc.classList.remove("rotated");
                } else {
                  setMode("light");
                  doc.classList.add("inverted");
                  doc.classList.add("rotated");
                }
              }}
            >
              {mode} mode
            </ThemeButton>
          </ButtonWrapper>
        </Nav>
        {children}
        <Footer>All content © Mae Capozzi</Footer>
      </ThemeProvider>
    </>
  );
};

export default Layout;
