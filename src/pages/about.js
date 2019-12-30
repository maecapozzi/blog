import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { HeadingWrapper } from "../components/Header";
import { TextWrapper } from "../components/Text";
import { Card } from "../components/Card";
import { StyledExternalLink } from "../components/Link";
import { theme } from "../styles/theme";
import Bio from "../components/bio";

const SectionHeadings = styled(`h3`)`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes["6"]};
  font-weight: ${theme.fontWeights.heavy};
  margin: ${theme.spacings["5"]};
`;

const About = () => {
  return (
    <Main>
      <HeadingWrapper>
        <Header>About Me</Header>
      </HeadingWrapper>
      <Bio />
      <Card>
        <SectionHeadings>Find me on the internet</SectionHeadings>
        <TextWrapper>
          <ul>
            <li>
              <StyledExternalLink href="https://github.com/maecapozzi">
                Github
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://twitter.com/MCapoz">
                Twitter
              </StyledExternalLink>
            </li>
          </ul>
        </TextWrapper>
      </Card>
      <Card>
        <SectionHeadings>Open Source</SectionHeadings>
        <TextWrapper>
          <ul>
            <li>
              <StyledExternalLink href="https://github.com/maecapozzi/gatsby-theme-about-me">
                gatsby-theme-about-me
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://github.com/maecapozzi/react-scroll-activator">
                react-scroll-activator
              </StyledExternalLink>
            </li>
          </ul>
        </TextWrapper>
      </Card>

      <Card>
        <SectionHeadings>Work</SectionHeadings>
        <TextWrapper>
          <ul>
            <li>Harry's</li>
            <li>InRhythm</li>
            <li>Thrive Global</li>
            <li>501 Auctions</li>
          </ul>
        </TextWrapper>
      </Card>
    </Main>
  );
};

export default About;
