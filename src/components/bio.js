import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { Text } from "../components/Text";
import Emoji from "../components/Emoji";

const BioWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <Text>
              Hi! <Emoji symbol="👋" /> {` `}
              I'm <strong>{author}</strong>. Welcome to my corner of the
              internet. I'm a Brooklyn-based software engineer interested in
              design systems, component libraries, and the JAMStack.
            </Text>
          </BioWrapper>
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
