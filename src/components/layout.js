import React, { useState } from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import { theme } from "../styles/theme";
import * as menu from "../../images/menu.svg";

const Nav = styled("nav")`
  background: ${theme.colors.tertiary};
  display: flex;
  height: ${theme.spacings["8"]};
  justify-content: flex-start;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  position: fixed;
  width: 100%;
  z-index: 1;
}
`;

const Hamburger = styled("button")`
  padding: ${theme.spacings["4"]};
  border: none;
  background: ${theme.colors.tertiary};
`;

const MenuDropdown = styled("div")`
  background: ${theme.colors.gray1};
  height: 100vh;
  width: ${theme.spacings["11"]};
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  position: fixed;
  margin-top: ${theme.spacings["8"]};
  display: ${props => (props.show ? "block" : "none")};
  padding: ${theme.spacings["4"]};
  z-index: 1;
`;

const toggleMenu = (menuState, setMenuState, e) => {
  e.preventDefault();
  if (menuState === "open") {
    setMenuState("closed");
  } else {
    setMenuState("open");
  }
};

const Footer = styled.footer`
  text-align: center;
  padding: ${theme.spacings["4"]};
`;

const Layout = ({ children }) => {
  const [menuState, setMenuState] = useState("closed");

  return (
    <>
      <Nav>
        <Hamburger onClick={e => toggleMenu(menuState, setMenuState, e)}>
          <img
            src={menu}
            alt="A hamburger menu. When selected, it expands to reveal the rest of the menu."
          ></img>
        </Hamburger>
        <MenuDropdown show={menuState === "open"}>
          <div>
            <StyledGatsbyLink to="/">Home</StyledGatsbyLink>
          </div>
          <StyledGatsbyLink to="/about">About Me</StyledGatsbyLink>
        </MenuDropdown>
      </Nav>
      {children}
      <Footer>All content © Mae Capozzi</Footer>
    </>
  );
};

export default Layout;
