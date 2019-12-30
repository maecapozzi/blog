import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { HeadingWrapper } from "../components/Header";
import { Text } from "../components/Text";
import { theme } from "../styles/theme";

const SectionHeadings = styled(`h3`)`
  margin-top: ${theme.spacing["5"]};
`;

const About = () => {
  return (
    <Main>
      <HeadingWrapper>
        <Header>About</Header>
      </HeadingWrapper>
      <Text>
        Hi, I'm Mae Capozzi. Welcome to my corner of the internet. I'm a
        Brooklyn-based software engineer interested in design systems, component
        libraries, and the JAMStack.
      </Text>
      <SectionHeadings>Find me on the internet</SectionHeadings>
      <ul>
        <li>Github</li>
        <li>Twitter</li>
        <li>Email</li>
      </ul>
      <SectionHeadings>Open Source</SectionHeadings>
      <ul>
        <li>gatsby-theme-about-me</li>
        <li>react-scroll-activator</li>
      </ul>
      <SectionHeadings>Work</SectionHeadings>
      <ul>
        <li>501 Auctions</li>
        <li>Thrive Global</li>
        <li>InRhythm</li>
        <li>Harry's</li>
      </ul>
    </Main>
  );
};

export default About;
