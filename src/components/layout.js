import React from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";

const Nav = styled("nav")`
  align-items: center;
  background: #f7f5fe;
  display: flex;
  height: 3em;
  justify-content: flex-end;
  padding: 20px;
  border-bottom: 1px solid #3a3a3a69;
}
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
