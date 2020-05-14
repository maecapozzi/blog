import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import Emoji from "../components/Emoji";
import { StyledGatsbyLink, StyledExternalLink } from "../components/Link";

const BioWrapper = styled.div``;

const Wrapper = styled.div`
  margin: 40px 0px;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <>
            <BioWrapper>
              <Wrapper>
                <Text>
                  Hi! <Emoji symbol="👋" /> {` `}
                  I'm <strong>{author}</strong>. Welcome to my corner of the
                  internet.
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  I'm a Brooklyn-based software engineer interested in design
                  systems, component libraries, and the JAMStack. Before that, I
                  was an English major at Skidmore College in upstate New York.
                  Big transition, right?
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  You've stumbled on my personal site! I'm so happy that you're
                  here. You'll mostly find React coding tips, thoughts on design
                  systems, and the occasional personal post.
                </Text>
              </Wrapper>
              <Wrapper>
                <Text>
                  Sometimes, you might come to the site and the design will look
                  wonky, posts will be half-finished, or it'll just be totally
                  broken. I hope you don't mind <em>too</em> much! I spend a lot
                  of time writing sturdy code for Harry's––I like to have a
                  place where I can fool around and try out new concepts without
                  worrying too much.
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
