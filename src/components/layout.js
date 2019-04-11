import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Link as FooterLink } from "../components/Link";

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
  margin: 0 auto;
  padding: 2em;
`;

const Main = styled("main")`
  margin: 0 auto;
  max-width: 800px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a3132;

  &:hover {
    color: #0482e3;
  }
`;

const Footer = styled("footer")`
  text-align: center;
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
        <header>{header}</header>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <FooterLink href="https://www.gatsbyjs.org">Gatsby</FooterLink>
        </Footer>
      </Page>
    );
  }
}

export default Layout;
