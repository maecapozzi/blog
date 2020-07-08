import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { HeadingWrapper } from "../components/Header";
import { StyledExternalLink } from "../components/Link";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";

export const SectionHeadings = styled(`h3`)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes["6"]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: ${(props) => props.theme.spacings["4"]};
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const Content = styled.div`
  h3 {
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  li {
    font-size: ${(props) => props.theme.fontSizes["4"]};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
  }
  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      color: ${(props) => props.theme.colors.highlight};
    }
  }
`;

export const List = styled(`li`)`
  color: ${(props) => props.theme.colors.primary};
`;

const About = () => {
  return (
    <Grid>
      <Main>
        <HeadingWrapper>
          <Header>About Me</Header>
        </HeadingWrapper>
        <Content>
          <SectionHeadings>Find me on the internet</SectionHeadings>
          <ul>
            <List>
              <StyledExternalLink href="https://github.com/maecapozzi">
                Github
              </StyledExternalLink>
            </List>
            <List>
              <StyledExternalLink href="https://twitter.com/MCapoz">
                Twitter
              </StyledExternalLink>
            </List>
          </ul>

          <SectionHeadings>Talks</SectionHeadings>
          <ul>
            <List>
              <StyledExternalLink href="https://www.youtube.com/watch?v=cp6nWSBEM0o">
                How Flamingo Got 5x Faster Page Loads with Gatsby
              </StyledExternalLink>
            </List>
            <List>
              <StyledExternalLink href="https://www.youtube.com/watch?v=PHi2lohuXvo">
                Building a Reusable Component Library
              </StyledExternalLink>
            </List>
          </ul>

          <SectionHeadings>Published Work</SectionHeadings>
          <ul>
            <List>
              <StyledExternalLink href="https://medium.com/harrys-engineering/how-we-used-gatsby-js-to-build-a-blazing-fast-e-commerce-site-a9818145c67b">
                How We Used Gatsby.js to Build a Blazing Fast E-Commerce Site
              </StyledExternalLink>
            </List>
            <List>
              <StyledExternalLink href="https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/">
                The Forge: Harry’s approach to the multi-brand component library
              </StyledExternalLink>
            </List>
          </ul>

          <SectionHeadings>Open Source</SectionHeadings>
          <ul>
            <List>
              <StyledExternalLink href="https://github.com/maecapozzi/gatsby-theme-about-me">
                gatsby-theme-about-me
              </StyledExternalLink>
            </List>
            <List>
              <StyledExternalLink href="https://github.com/maecapozzi/react-scroll-activator">
                react-scroll-activator
              </StyledExternalLink>
            </List>
          </ul>
        </Content>
        <NewsletterSignup />
      </Main>
    </Grid>
  );
};

export default About;
