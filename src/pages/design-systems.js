import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { Main } from "../components/Main";
import { Grid } from "../components/Grid";
import { Title, StyledLink } from "../components/Card";

const CourseSection = styled.div`
  margin-top ${(props) => props.theme.spacings["8"]};
  margin-bottom ${(props) => props.theme.spacings["8"]};
`;

const StyledHeading = styled.h2`
  padding: 0;
`;

const Card = ({ slug, title }) => {
  return (
    <StyledCard>
      <StyledLink to={slug}>
        <Title>{title}</Title>
      </StyledLink>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin-top: ${(props) => props.theme.spacings["5"]};
  margin-bottom: ${(props) => props.theme.spacings["5"]};
  margin-left: ${(props) => props.theme.spacings["4"]};
`;

const DesignSystems = () => {
  return (
    <Grid>
      <Main>
        <SEO
          title="Design Systems"
          keywords={[
            `design systems`,
            `react`,
            `javascript`,
            `typescript`,
            `figma`,
            `frontend`,
            `lerna`,
            `monorepo`,
          ]}
        />
        <CourseSection>
          <StyledHeading>Introduction to Design Systems</StyledHeading>
          <Card
            title="What is a design system?"
            slug="/what-is-a-design-system"
          ></Card>
        </CourseSection>
        <CourseSection>
          <StyledHeading>Setting up your repo</StyledHeading>
          <Card
            readMore={false}
            title="Should my component library be a monorepo?"
            slug="/monorepo-or-multirepo"
          ></Card>
        </CourseSection>
        <CourseSection>
          <StyledHeading>Versioning and Publishing</StyledHeading>
          <Card
            readMore={false}
            title="How to configure canary builds for your component library"
            slug="/component-library-canary-builds"
          ></Card>
          <Card
            readMore={false}
            title="Monorepo Versioning"
            slug="/lerna-monorepo-versioning"
          ></Card>
          <Card
            readMore={false}
            title="Versioning"
            slug="/library-versioning"
          ></Card>
          <Card
            readMore={false}
            title="A short explanation of semantic versioning"
            slug="/short-explanation-of-semver"
          ></Card>
          <Card
            readMore={false}
            title="Should you version components separately or as a unified system?"
            slug="/version-bundling"
          ></Card>
          <Card
            readMore={false}
            title="What is Lerna?"
            slug="/what-is-lerna"
          ></Card>
        </CourseSection>
        <CourseSection>
          <StyledHeading>Parts of the system</StyledHeading>
          <Card
            readMore={false}
            title="The 5 layers of a design system"
            slug="/layers-of-abstraction-in-design-systems"
          ></Card>
          <Card
            readMore={false}
            title="Design Tokens"
            slug="/design-tokens"
          ></Card>
        </CourseSection>
        <CourseSection>
          <StyledHeading>Software Architecture</StyledHeading>
          <Card
            readMore={false}
            title="Building a multi-brand design system in layers"
            slug="/progressive-disclosure-of-complexity"
          ></Card>
        </CourseSection>
        <CourseSection>
          <StyledHeading>Tips</StyledHeading>
          <Card
            readMore={false}
            title="Reduce Friction with Automated Package Generation"
            slug="/generate-package"
          ></Card>
          <Card
            readMore={false}
            title="4 tools to help you version your component library"
            slug="/4-tools-to-help-you-version-your-component-library"
          ></Card>
        </CourseSection>
      </Main>
    </Grid>
  );
};

export default DesignSystems;
