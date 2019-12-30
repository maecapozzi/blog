import React from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import { theme } from "../styles/theme";

const Nav = styled("nav")`
  align-items: center;
  background: ${theme.colors.gray1};
  display: flex;
  height: ${theme.spacing["8"]};
  justify-content: flex-end;
  padding: 20px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
}
`;

const Space = styled("span")`
  margin: ${theme.spacing["2"]};
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Nav>
          <StyledGatsbyLink to="/">Home</StyledGatsbyLink>
          <Space></Space>
          <StyledGatsbyLink to="/blog">Blog</StyledGatsbyLink>
          <Space></Space>
          <StyledGatsbyLink to="/about-me">About Me</StyledGatsbyLink>
        </Nav>
        {children}
      </>
    );
  }
}

export default Layout;
