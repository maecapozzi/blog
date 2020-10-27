import React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";
import { GlobalStyle } from "../components/GlobalStyle";
import { GridStyles } from "../components/Grid";

const List = styled.ul`
  ${GridStyles};
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  line-height: ${(props) => props.theme.fontSizes["3"]};
`;

const NavLink = styled(Link)`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes[`${props.fontSize}`]};
  padding-right: 24px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  grid-column: 2 / span 10;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.li`
  padding: 16px 0px 0px 0px;
  margin-left: 0px;
  grid-column: 2 / span 10;
  display: flex;
`;

const Footer = styled.footer`
  text-align: center;
  padding: ${(props) => props.theme.spacings["4"]};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["2"]};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={themes.tosh}>
      <GlobalStyle />
      <List>
        <Logo>
          <NavLink to="/" fontSize="3">
            Mae Capozzi
          </NavLink>
        </Logo>
        <Nav>
          <NavLink to="/blog" fontSize="3">
            Posts
          </NavLink>
          <NavLink
            to="/getting-started-with-design-systems-checklist"
            fontSize="3"
          >
            Design Systems Checklist
          </NavLink>
          <NavLink to="/newsletter" fontSize="3">
            Newsletter
          </NavLink>
        </Nav>
      </List>
      {children}
      <Footer>All content © Mae Capozzi</Footer>
    </ThemeProvider>
  );
};

export default Layout;
