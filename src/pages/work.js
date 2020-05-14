import React from "react";
import styled from "styled-components";
import { Main } from "../components/Main";
import { HeadingWrapper, Header } from "../components/Header";
import Bio from "../components/bio";
import { List, Content } from "./about";
import { NewsletterSignup } from "../components/NewsletterSignup";

const Headings = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

const Work = () => (
  <Main>
    <HeadingWrapper>
      <Header>Work</Header>
    </HeadingWrapper>
    <Bio />
    <Content>
      <Headings>Harry's // Senior Software Engineer</Headings>
      <ul>
        <List>
          Launched <a href="shopflamingo.com">shopflamingo.com</a>, a Gatsby
          site with React, Redux, and styled-components
        </List>
        <List>
          Built a starter kit with preconfigured TypeScript, Babel, Jest,
          Storybook, webpack, linting, and Prettier. It made setting up new
          sites at Harry’s 200% faster, and has been used to start three
          projects so far
        </List>
        <List>
          Maintainer of the{" "}
          <a href="https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/">
            Forge
          </a>
          , an initiative to speed up building new brands at Harry’s. Consists
          of a design system, component library, starter kits, and TypeScript
          libraries
        </List>
        <List>
          Interim tech lead on the distributed team building an international
          Gatsby site with React, TypeScript, GraphQL, and Apollo-Client
        </List>
        <List>
          Led the migration of shopflamingo.com from Flow to TypeScript
        </List>
      </ul>
      <Headings>InRhythm // Software Engineer</Headings>
      <ul>
        <List>
          Consulted for American Express as a software engineer on the global
          corporate cards team
        </List>
        <List>
          Built international marketing sites for corporate cards for American
          Express, working with ES6, React, and Node
        </List>
        <List>Served on the People Leadership Team</List>
        <List>Launched a Women in Tech program</List>
      </ul>
      <Headings>
        Thrive Global // Technical Project Manager & Frontend Dev
      </Headings>
      <ul>
        <List>Project-managed the on-time launch of thriveglobal.com</List>
        <List>
          Built multiple UI components for the frontend of thriveglobal.com
        </List>
      </ul>
      <Headings>501 Auctions // Junior Developer</Headings>
      <ul>
        <List>
          Worked on a live auction tool for nonprofits in Angular 1 and PHP
        </List>
      </ul>
    </Content>
    <NewsletterSignup />
  </Main>
);

export default Work;
