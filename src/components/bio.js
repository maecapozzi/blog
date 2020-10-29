import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import { StyledExternalLink } from "../components/Link";
import { LayoutGrid, GridColumn } from "../components/Grid";

const StyledImage = styled(Img)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Wrapper = styled.div`
  margin: 24px 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OrderedList = styled.ol`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  margin-bottom: 0px;
`;

const Pink = styled.span`
  color: ${(props) => props.theme.colors.highlight};
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
              columnEnd={["24", "22", "17"]}
            >
              <Wrapper>
                <Text>
                  <ImageWrapper>
                    <StyledImage fluid={img} />
                    <h1>
                      Hey, I'm Mae<Pink>.</Pink>
                    </h1>
                  </ImageWrapper>
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  I’m a software developer, writer, and design systems advocate.
                  If the title existed, I’d call myself a{" "}
                  <b>frontend infrastructure engineeer</b>. This is my personal
                  blog where I write about problems that meet two requirements.
                </Text>
              </Wrapper>
              <Wrapper>
                <OrderedList>1. The problem interests me.</OrderedList>
                <OrderedList>
                  2. One or more people have expressed they have the problem on
                  the internet.
                </OrderedList>
              </Wrapper>
              <Wrapper>
                <Text>
                  I try to post often and I’m not too precious about my drafts.
                  Sometimes you’ll see unfinished work, or something won’t look
                  quite right. I spend a lot of time writing sturdy code for
                  better.com. This blog is my space to explore and share ideas.
                </Text>
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
