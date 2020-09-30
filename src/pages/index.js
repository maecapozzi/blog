import React from "react";
import styled from "styled-components";
import Bio from "../components/bio";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { Main } from "../components/Main";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { List, SectionHeadings } from "./about";
import { StyledGatsbyLink } from "../components/Link";
import { Grid } from "../components/Grid";

const StyledButton = styled(Link)`
  background-color: ${(props) => props.theme.colors.highlight};
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: none;
  border: none;
  padding: 8px 16px;
  color: white;
  border-radius: 5px;
  margin-left: 40px;
  font-size: ${(props) => props.theme.fontSizes["2"]};

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Content = styled.div`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes["2"]};

  && {
    a {
      color: ${(props) => props.theme.colors.primary};

      &:hover {
        color: ${(props) => props.theme.colors.highlight};
      }
    }
  }
`;

const Index = () => {
  return (
    <Grid>
      <Main>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
        />
        <Bio />
        <hr />
        <Content>
          <SectionHeadings>Recent thoughts</SectionHeadings>
          <ul>
            <List>
              <StyledGatsbyLink to="/progressive-disclosure-of-complexity/">
                Building a multi-brand design system in layers
              </StyledGatsbyLink>
            </List>
            <List>
              <StyledGatsbyLink to="/design-tokens">
                Design Tokens
              </StyledGatsbyLink>
            </List>
            <List>
              <StyledGatsbyLink to="/how-to-make-http-requests-part-1">
                How to Make HTTP Requests in React
              </StyledGatsbyLink>
            </List>
            <List>
              <StyledGatsbyLink to="/lerna-monorepo-versioning/">
                Before You Build A Component Library: Monorepo Versioning
              </StyledGatsbyLink>
            </List>
          </ul>
        </Content>
        <StyledButton to="/blog">See all posts</StyledButton>
        <NewsletterSignup />
      </Main>
    </Grid>
  );
};

export default Index;
