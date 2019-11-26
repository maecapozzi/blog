import React from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";

const Nav = styled("nav")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 3em;
`;

const Space = styled("span")`
  margin 10px;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Nav>
          <Space>
            <StyledGatsbyLink to="/">Home</StyledGatsbyLink>{" "}
          </Space>
          <StyledGatsbyLink to="/about-me">About Me</StyledGatsbyLink>
        </Nav>
        {children}
      </>
    );
  }
}

export default Layout;
