import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Text } from "../components/Text";
import { Link } from "../components/Link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #0482e3;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: `20px`,
              width: `100%`
            }}
          >
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
              Blog by <strong>{author}</strong>. You can
              {` `}
              <Link href={`https://twitter.com/${social.twitter}`}>
                follow her on twitter
              </Link>
              {` `}
              or
              {` `}
              <Link href={`https://github.com/${social.github}`}>
                find her on Github
              </Link>
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
