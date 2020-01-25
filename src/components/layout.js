import React from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import { theme } from "../styles/theme";

const Nav = styled("nav")`
  background: ${theme.colors.primary};
  display: flex;
  height: ${theme.spacings["8"]};
  justify-content: flex-start;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  position: fixed;
  width: 100%;
  z-index: 1;
  align-items: center;
}
`;

const Footer = styled.footer`
  text-align: center;
  padding: ${theme.spacings["4"]};
`;

const Space = styled.span`
  margin: ${theme.spacings["2"]};
`;

const NavItems = styled.div`
  margin: ${theme.spacings["5"]};
  color: #ffffff;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <NavItems>
          <StyledGatsbyLink to="/">Home</StyledGatsbyLink>
          <Space></Space>
          <StyledGatsbyLink to="/about">About Me</StyledGatsbyLink>
          <Space></Space>
          <StyledGatsbyLink to="/work">Work</StyledGatsbyLink>
        </NavItems>
      </Nav>
      {children}
      <Footer>All content © Mae Capozzi</Footer>
    </>
  );
};

export default Layout;
