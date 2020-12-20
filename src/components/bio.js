import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import { StyledExternalLink, StyledGatsbyLink } from "../components/Link";
import { LayoutGrid, GridColumn } from "../components/Grid";
import { Header } from "../components/Header";
import { Title } from "../components/Card";

const Wrapper = styled.div`
  margin: 24px 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const img = data.fileName.childImageSharp.fluid;
        return (
          <LayoutGrid>
            <GridColumn
              columnStart={["3", "5", "10"]}
              columnEnd={["24", "22", "20"]}
            >
              <Wrapper>
                <Title>
                  Hi, I'm Mae. I'm a software engineer who has spent the last
                  few years working on design systems.
                </Title>
              </Wrapper>
              <Wrapper>
                <Text>
                  Welcome to my{" "}
                  <StyledExternalLink href="https://joelhooks.com/digital-garden">
                    digital garden
                  </StyledExternalLink>{" "}
                  🌱. I try to post often and I’m not too precious about my
                  drafts. Sometimes you’ll see unfinished work or something
                  won’t look quite right. I spend a lot of time writing sturdy
                  code for my day job. This blog is my space to explore and
                  share ideas.
                </Text>
              </Wrapper>
              <Wrapper>
                <h2>Top posts</h2>
                <li>
                  <StyledGatsbyLink to="/getting-started-with-design-systems-checklist/">
                    Getting Started with Design Systems Checklist
                  </StyledGatsbyLink>
                </li>
                <li>
                  <StyledGatsbyLink to="/progressive-disclosure-of-complexity/">
                    Building a multi-brand design system in layers
                  </StyledGatsbyLink>
                </li>
                <li>
                  <StyledGatsbyLink to="/layers-of-abstraction-in-design-systems/">
                    The 5 layers of a design system
                  </StyledGatsbyLink>
                </li>
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
