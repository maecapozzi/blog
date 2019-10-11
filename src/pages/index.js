import "typeface-inconsolata";
import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a3132;

  &:hover {
    color: #0482e3;
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

const BlogIndex = props => {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const images = data.allImageSharp.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
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
    </Layout>
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
