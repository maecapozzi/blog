import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Text } from '../components/Text'
import { Link } from '../components/Link'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #0482E3;
`

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
              width: `100%`,
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
              Written by <strong>{author}</strong>. Currently a senior software
              engineer at Harry's building design systems.
              {` `}
              <Link href={`https://twitter.com/${social.twitter}`}>
                You should follow her on Twitter
              </Link>
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
        }
      }
    }
  }
`;

export default Bio;
