import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { HeadingWrapper } from "../components/Header";
import { StyledExternalLink } from "../components/Link";
import { theme } from "../styles/theme";
import Bio from "../components/bio";

const SectionHeadings = styled(`h3`)`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes["7"]};
  font-weight: ${theme.fontWeights.heavy};
  margin-top: ${theme.spacings["4"]};
  font-family: ${theme.fonts.primary};
`;

const Content = styled.div`
  padding-top: ${theme.spacings["6"]};
`;

const List = styled(`li`)`
  color: ${theme.colors.primary};
`;

const About = () => {
  return (
    <Main>
      <HeadingWrapper>
        <Header>About Me</Header>
      </HeadingWrapper>
      <Bio />
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

        <SectionHeadings>Work</SectionHeadings>
        <List>Senior Software Engineer @ Harry's</List>
        <List>Software Engineer @ InRhythm</List>
        <List>Technical Project Manager & Frontend Dev @ Thrive Global</List>
        <List>Junior Developer @ 501 Auctions</List>
      </Content>
    </Main>
  );
};

export default About;
