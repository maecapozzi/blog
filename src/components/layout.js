import React from "react";
import { Link } from "gatsby";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";
import { GlobalStyle } from "../components/GlobalStyle";
import { LayoutGrid, GridColumn } from "../components/Grid";

const List = styled.ul`
  list-style-type: none;
  margin: ${(props) =>
    `${props.theme.spacings["5"]} 0px ${props.theme.spacings["5"]} 0px`};
`;

const NavLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.light};
  color: ${(props) => props.theme.colors.text};
  margin-right: ${(props) => props.theme.spacings["8"]};
  font-size: ${(props) => props.theme.fontSizes[`${props.fontSize}`]};
  font-family: ${(props) => props.theme.fonts.secondary};
  text-decoration: none;
`;

const Nav = styled(`div`)`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled(NavLink)`
  font-weight: ${(props) => props.theme.fontWeights.heavy};
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
        <LayoutGrid>
          <GridColumn
            columnStart={["3", "5", "7"]}
            columnEnd={["25", "25", "10"]}
          >
            <Logo to="/" fontSize="5">
              Mae Capozzi
            </Logo>
          </GridColumn>
          <GridColumn
            columnStart={["3", "5", "10"]}
            columnEnd={["25", "25", "25"]}
          >
            <Nav>
              <NavLink to="/blog" fontSize="4">
                Posts
              </NavLink>
              {/* <NavLink
                to="/getting-started-with-design-systems-checklist"
                fontSize="4"
              >
                Design Systems Checklist
              </NavLink> */}
              <NavLink to="/newsletter" fontSize="4">
                Newsletter
              </NavLink>
            </Nav>
          </GridColumn>
        </LayoutGrid>
      </List>

      {children}
      <Footer>© Mae Capozzi's Website 2021</Footer>
    </ThemeProvider>
  );
};

export default Layout;
