import "typeface-inconsolata";
import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Bio from "../components/bio";
import SEO from "../components/seo";
import Aside from "../components/aside";
import MainSection from "../components/MainSection";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a3132;

  &:hover {
    color: #5746e7;
  }
`;

const PostWrapper = styled("div")`
  padding: 20px 0;
`;

const DateWrapper = styled("div")`
  margin-bottom: 20px;
`;

const StyledImage = styled(Img)`
  margin-bottom: 20px;
`;

const Main = styled("main")`
  margin: 0 auto;
  max-width: 800px;
`;

const Heading = styled("h1")`
  color: #5746e7;
  margin: 1em 0 0 0;
  font-size: 75px;
`;

const BlogIndex = props => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  const images = data.allImageSharp.edges;

  return (
    <Main>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
      />
      <Heading>Home</Heading>
      <Bio />
      {posts.map(({ node }) => {
        let headerImage;
        images.forEach(image => {
          if (image.node.fluid.originalName === node.frontmatter.img) {
            headerImage = image;
          }
        });

        const title = node.frontmatter.title || node.fields.slug;
        return (
          <PostWrapper key={node.fields.slug}>
            <Header>
              <StyledLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </StyledLink>
            </Header>
            <DateWrapper>
              <small>{node.frontmatter.date}</small>
            </DateWrapper>
            {headerImage && (
              <Link to={node.fields.slug}>
                <StyledImage fluid={headerImage.node.fluid} />
              </Link>
            )}
            <Text dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </PostWrapper>
        );
      })}
    </Main>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            img
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`;
