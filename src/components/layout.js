import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { Link as FooterLink } from '../components/Link'

const Header = styled('h1')`
  font-size: 50px;
  padding-bottom: 50px;
  text-align: center;
`

const Page = styled('div')`
  margin: 0 auto;
  padding: 2em;
`

const Main = styled('main')`
  margin: 0 auto;
  max-width: 800px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2A3132;
`

const Footer = styled('footer')`
  text-align: center;
`


class Layout extends React.Component {
  render() {
    const { title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    header = (
      <Header>
        <StyledLink to="/">
          {title}
        </StyledLink>
      </Header>
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
