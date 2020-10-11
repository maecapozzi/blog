import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import { StyledGatsbyLink, StyledExternalLink } from "../components/Link";

const BioWrapper = styled.div``;

const Wrapper = styled.div`
  margin: 24px 0px;
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
        return (
          <>
            <BioWrapper>
              <Wrapper>
                <Text>
                  <span>
                    <h1>
                      Hey, I'm Mae<Pink>.</Pink>
                    </h1>
                  </span>
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  I’m a software developer, writer, and design systems advocate.
                  If the title existed, I’d call myself a{" "}
                  <b>frontend infrastructure engineer</b>.
                </Text>
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
                  <b>Let's chat.</b> You can reach me on {` `}
                  <StyledExternalLink href="https://twitter.com/MCapoz">
                    Twitter
                  </StyledExternalLink>
                  . Or if you're just interested in being notified when I post,
                  sign up for my{` `}
                  <StyledGatsbyLink to="/newsletter">
                    newsletter
                  </StyledGatsbyLink>
                  . I'll do my best to get back to you as soon as I can.
                </Text>
              </Wrapper>
            </BioWrapper>
          </>
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
  }
`;

export default Bio;
