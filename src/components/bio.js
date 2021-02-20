import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import { StyledExternalLink, StyledGatsbyLink } from "../components/Link";
import { LayoutGrid, GridColumn } from "../components/Grid";
import { Title } from "../components/Card";

const Wrapper = styled.div`
  margin: 24px 0px;
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
`;

const BulletList = ({ title, href }) => {
  return (
    <li>
      <StyledGatsbyLink to={href}>{title}</StyledGatsbyLink>
    </li>
  );
};

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        return (
          <LayoutGrid>
            <GridColumn
              columnStart={["3", "5", "10"]}
              columnEnd={["24", "22", "20"]}
            >
              <Wrapper>
                <H2>
                  Hi, I'm Mae 👋. I'm a software engineer who has spent the last
                  4 years working on design systems.
                </H2>
              </Wrapper>
              <Wrapper>
                <Text>
                  I've been writing code professionally for 6 years. In the last
                  4 years, I've worked on design systems and component libraries
                  for companies like American Express, Harry's, and Better.com.
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  Welcome to my{" "}
                  <StyledExternalLink href="https://joelhooks.com/digital-garden">
                    digital garden
                  </StyledExternalLink>{" "}
                  🌱.
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  I believe that design systems thinking is a powerful way to
                  improve a product's consistency, accessibility, and speed to
                  market. I love sharing what I know with other developers and
                  engineering managers so that they can also build lasting,
                  robust design systems artifacts, like component libraries,
                  design assets, processes, and automation.
                </Text>
              </Wrapper>
              <Wrapper>
                <h2>Design systems architecture</h2>
                <BulletList
                  title="Building a multi-brand design system in layers"
                  href="/progressive-disclosure-of-complexity/"
                ></BulletList>
                <BulletList
                  title="The 5 layers of a design system"
                  href="/layers-of-abstraction-in-design-systems/"
                ></BulletList>
                <BulletList
                  title="Where to Start with Design Tokens"
                  href="/where-to-start-with-design-tokens/"
                ></BulletList>

                <h2>Frontend infrastructure</h2>
                <BulletList
                  title="How to Ignore Changed Files when Publishing with Lerna"
                  href="/how-to-ignore-files-when-using-lerna/"
                ></BulletList>
                <BulletList
                  title="What are Conventional Commits?"
                  href="/what-are-conventional-commits/"
                ></BulletList>
                <BulletList
                  title="Do you Need to Version your Component Library?"
                  href="/do-you-need-to-version-your-component-library/"
                ></BulletList>
                <h2>Team models and governance</h2>
                <BulletList
                  title="Design System Team Models: The First Engineering Hires"
                  href="/design-system-team-models-part-I/"
                ></BulletList>
                <BulletList
                  title="Design System Team Models: How to Hire a Frontend-of-the-Frontend Engineer"
                  href="/design-system-team-models-part-II/"
                ></BulletList>
                <BulletList
                  title="Design System Team Models: How to Hire a Frontend Infrastructure Engineer"
                  href="/design-system-team-models-part-III/"
                ></BulletList>
              </Wrapper>
              <Wrapper>
                <Text>
                  Let's chat. You can reach me on{" "}
                  <StyledExternalLink href="https://twitter.com/MCapoz">
                    Twitter
                  </StyledExternalLink>
                  . Or if you're just interested in being notified when I post,
                  sign up for my newsletter. I'll do my best to get back to you
                  as soon as I can.
                </Text>
              </Wrapper>
            </GridColumn>
            <div />
          </LayoutGrid>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
      }
    }
    fileName: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Bio;
