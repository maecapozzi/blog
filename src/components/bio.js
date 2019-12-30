import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Text } from "../components/Text";
import { StyledExternalLink } from "../components/Link";
import Emoji from "../components/Emoji";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: `20px`,
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <Text>
              Hi! <Emoji symbol="👋" /> {` `}
              I'm <strong>{author}</strong>. You can find me
              {` `}
              <StyledExternalLink
                href={`https://twitter.com/${social.twitter}`}
              >
                on Twitter
              </StyledExternalLink>
              {` `}
              and
              {` `}
              <StyledExternalLink href={`https://github.com/${social.github}`}>
                on Github
              </StyledExternalLink>
              .
            </Text>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Bio;
