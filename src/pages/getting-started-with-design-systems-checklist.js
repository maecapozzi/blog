import React from "react";
import styled from "styled-components";
import { Header, HeadingWrapper } from "../components/Header";
import { Grid } from "../components/Grid";
import { Main } from "../components/Main";
import { Text } from "../components/Text";
import { Link } from "gatsby";

const Checkbox = ({ children }) => {
  return (
    <div>
      <Text>
        <label>
          <input type="checkbox" /> {children}
        </label>
      </Text>
    </div>
  );
};

const Section = styled("div")`
  margin-top: 16px;
`;
const StyledCheckbox = styled(Checkbox)`
  margin: 20px;
`;

const StyledList = styled("li")`
  margin-bottom: 0px;
`;

const DSChecklist = () => {
  return (
    <Grid>
      <Main>
        <HeadingWrapper>
          <Header>Getting Started with Design Systems Checklist</Header>
        </HeadingWrapper>
        <Text>
          When I first started working on design systems, I didn't know where to
          start. Googling "what is a design system" only got me so far!
        </Text>
        <br></br>
        <Text>
          While I wish I could just download all of the information in my brain
          into yours, I can't (yet). Until then, this checklist is designed to
          guide your research.
        </Text>
        <br></br>
        <Text>
          This checklist contains a lot of information. I know it can feel
          overwhelming. Don't worry if some of the items on the list don't make
          sense yet. You should expect to work through this checklist over the
          course of months and years––not days.
        </Text>
        <br></br>
        <Text>
          I've bolded keywords to make topics easier to search. I've also linked
          to resources I've found helpful or written over the years. I have
          italicized topics you don't need to address immediately.
        </Text>
        <HeadingWrapper>
          <h2>Organizational Direction</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Decide if a design system is the{" "}
          <a href="https://gist.github.com/alanbsmith/b61a9881d79484c790a39f573061ea1a">
            right tool for the job
          </a>
        </StyledCheckbox>
        <StyledCheckbox>
          Find out if your company will invest in a design system
        </StyledCheckbox>
        <StyledCheckbox>
          Convince the developers to invest in a design system
        </StyledCheckbox>
        <StyledCheckbox>
          <em>
            Decide how people will{" "}
            <a href="https://bradfrost.com/blog/post/a-design-system-governance-process/">
              contribute to your design system
            </a>
          </em>
        </StyledCheckbox>
        <HeadingWrapper>
          <h2>Philosophical / Critical Knowledge</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Learn about the{" "}
          <Link to="/layers-of-abstraction-in-design-systems/">
            5 layers of a design system
          </Link>{" "}
          and decide which layers you need to support
        </StyledCheckbox>
        <StyledCheckbox> Research Accessibility</StyledCheckbox>
        <StyledList>
          Read my{" "}
          <a href="https://madalyn.dev/blog/a11y-testing-coffee/">
            favorite resource on accessibility testing
          </a>
        </StyledList>
        <StyledList>
          <em>
            Learn about{" "}
            <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 Guidelines</a>
          </em>
        </StyledList>
        <StyledList>
          <em>
            Consider using an automated testing tool like{" "}
            <a href="https://wave.webaim.org/">WAVE</a>
          </em>
        </StyledList>
        <StyledCheckbox>
          {" "}
          What is the scope of your component library (how many components will
          you build, what types of components will you create)?
        </StyledCheckbox>
        <StyledCheckbox>
          {" "}
          What is your component library's source of truth?
        </StyledCheckbox>
        <StyledCheckbox> How opinionated is your design system?</StyledCheckbox>
        <HeadingWrapper>
          <h2>Working With Designers</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          {" "}
          Pick a design tool (<strong>Figma</strong>, <strong>Sketch</strong>)
        </StyledCheckbox>
        <StyledCheckbox>
          {" "}
          Research{" "}
          <a href="https://www.w3.org/WAI/WCAG2AA-Conformance.html">
            WCAG compliance
          </a>{" "}
          and select which level your library will support (aim for at least
          level AA)
        </StyledCheckbox>
        <StyledCheckbox>
          {" "}
          Pick the first few components you will build together
        </StyledCheckbox>
        <StyledCheckbox>
          {" "}
          <em>
            Invest in building a repeatable project management process to move
            work through the system
          </em>
        </StyledCheckbox>
        <StyledList>
          <em>Set up frequent touch-points between designers and developers</em>
        </StyledList>
        <StyledList>
          <em>Set up a repeating design critique session</em>
        </StyledList>
        <HeadingWrapper>
          <h2>Choosing Tools</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Decide if you'll be building from scratch or if you can leverage an
          open-source component library (<strong>Reakit</strong>,{" "}
          <strong>Reach UI</strong>)
        </StyledCheckbox>
        <StyledCheckbox>
          Pick your language (<strong>JavaScript</strong>,
          <strong> React with Flow</strong>, <strong> TypeScript</strong>)
        </StyledCheckbox>
        <StyledCheckbox>
          Pick your JavaScript library (<strong>React</strong>,{" "}
          <strong> Angular</strong>, <strong> Vue</strong>,{" "}
          <strong> Web Components</strong>)
        </StyledCheckbox>
        <StyledCheckbox>
          Pick your approach to CSS (<strong>Vanilla CSS</strong>,{" "}
          <strong> SCSS</strong>, <strong> CSS Modules</strong>,
          <strong> Styled-Components</strong>, <strong> Emotion</strong>,
          <strong> Tailwind</strong>){" "}
        </StyledCheckbox>
        <StyledCheckbox>
          Decide if you want to configure your design tokens from scratch, or if
          you want to use a tool like <strong>Theme UI</strong>
        </StyledCheckbox>
        <HeadingWrapper>
          <h2>Versioning and Publishing</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Choose whether to store your components in a{" "}
          <Link to="/monorepo-or-multirepo">monorepo or a multi-repo</Link>
        </StyledCheckbox>
        <StyledList>
          <em>
            If you choose a monorepo, decide whether to use{" "}
            <Link to="/what-is-lerna">Lerna</Link>
          </em>
        </StyledList>
        <StyledCheckbox>
          Decide if you need to publish your components to a registry
        </StyledCheckbox>
        <StyledCheckbox>
          Learn about{" "}
          <Link to="/short-explanation-of-semver">semantic versioning</Link>
        </StyledCheckbox>
        <StyledCheckbox>
          Decide what <strong>registry</strong> to publish your components to (
          <strong>npm</strong>, <strong>artifactory</strong>)
        </StyledCheckbox>
        <StyledCheckbox>
          Add a <strong>changelog</strong>
        </StyledCheckbox>
        <StyledCheckbox>
          <em>
            Automate versioning and publishing of new changes in your CI
            pipeline
          </em>
        </StyledCheckbox>
        <HeadingWrapper>
          <h2>Building Components</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Work with designers to agree on{" "}
          <Link to="/design-tokens">design tokens</Link>
        </StyledCheckbox>
        <StyledCheckbox>
          Align with designers on language to describe the layers of your design
          system
        </StyledCheckbox>
        <StyledCheckbox>
          Make sure designers and developers are calling the same component the
          same name
        </StyledCheckbox>
        <StyledCheckbox>Implement design tokens</StyledCheckbox>
        <StyledCheckbox>
          Build elements (Button, Link, Tab, RadioButton, Grid)
        </StyledCheckbox>
        <StyledCheckbox>
          <em>Build patterns (Form, TabList, RadioList)</em>
        </StyledCheckbox>
        <StyledCheckbox>
          <em>
            Write useful scripts to make it easier to bootstrap new components
          </em>
        </StyledCheckbox>
        <HeadingWrapper>
          <h2>Enforcing Quality</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Decide on a testing strategy and what tools you'll use (
          <strong>jest</strong>, <strong> enzyme</strong>,{" "}
          <strong> testing-library</strong>, <strong> cypress</strong>,{" "}
          <strong> snapshot testing</strong>)
        </StyledCheckbox>
        <StyledCheckbox>Manually test for accessibility</StyledCheckbox>
        <StyledCheckbox>Cross-browser testing</StyledCheckbox>
        <StyledCheckbox>
          <em>
            Configure CI, and automatically run tests, type-checking, and
            versioning on every build
          </em>
        </StyledCheckbox>
        <StyledCheckbox>
          <em>
            Propose and adopt a <strong>release</strong> schedule and{" "}
            <strong>branching strategy</strong>
          </em>
        </StyledCheckbox>
        <StyledCheckbox>
          <em>
            Communicate with your stakeholders about how you'll be releasing
            changes
          </em>
        </StyledCheckbox>
        <HeadingWrapper>
          <h2>Encouraging Adoption</h2>
        </HeadingWrapper>
        <StyledCheckbox>
          Create a slack channel to answer questions
        </StyledCheckbox>
        <StyledCheckbox>
          Configure and deploy <a href="https://storybook.js.org/">Storybook</a>
        </StyledCheckbox>
        <StyledCheckbox>Write documentation for each component</StyledCheckbox>
        <StyledCheckbox>Hold office hours</StyledCheckbox>
        <StyledCheckbox>
          Give internal talks about design system concepts
        </StyledCheckbox>
        <Section>
          <Text>
            I hope this checklist has been helpful. If you've found anything
            confusing about this subject, send me a DM on Twitter{" "}
            <a href="https://twitter.com/MCapoz">@MCapoz</a> and I'll do my best
            to answer your question!
          </Text>
        </Section>
      </Main>
    </Grid>
  );
};

export default DSChecklist;