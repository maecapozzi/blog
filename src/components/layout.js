import React from "react";
import styled from "styled-components";
import { StyledGatsbyLink } from "../components/Link";
import Contact from "../components/Contact";

const Header = styled("h1")`
  font-size: 50px;
  padding: 20px 0;
  font-family: "Major Mono Display";
`;

const HeaderWrapper = styled("div")`
  margin: 0 auto;
  max-width: 800px;
`;

const Page = styled("div")`
  height: 100vh;
  margin: 0 auto;
  padding: 2em;
`;

const Main = styled("main")`
  margin: 0 auto;
  max-width: 800px;
`;

const StyledLink = styled(StyledGatsbyLink)`
  text-decoration: none;
  color: #2a3132;

  &:hover {
    color: #0482e3;
  }
`;

const Footer = styled("footer")`
  text-align: center;
  position: sticky;
  bottom: 0;
  background-color: #0482e3;
  color: white;
`;

const Nav = styled("nav")`
  text-align: right;
`;

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    let header;

    header = (
      <HeaderWrapper>
        <Header>
          <StyledLink to="/">{title}</StyledLink>
        </Header>
      </HeaderWrapper>
    );

    return (
      <Page>
        <Nav>
          <StyledGatsbyLink to="/">Home</StyledGatsbyLink>
          {` `}
          <StyledGatsbyLink to="/about">About Me</StyledGatsbyLink>
        </Nav>
        <header>{header}</header>
        <Main>{children}</Main>
        <Footer>
          <Contact />
        </Footer>
      </Page>
    );
  }
}

export default Layout;
