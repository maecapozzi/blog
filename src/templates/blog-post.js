import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogTitle = styled("h1")`
  font-size: 2em;
`;

const StyledLink = styled(Link)`
  color: #5746e7;
`;

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <BlogTitle>{post.frontmatter.title}</BlogTitle>
      {props.data.allImageSharp.edges.map(image => {
        if (image.node.fluid.originalName === post.frontmatter.img) {
          return <Img key={post.frontmatter.img} fluid={image.node.fluid} />;
        }
        return undefined;
      })}
      <p
        style={{
          display: `block`
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <StyledLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </StyledLink>
          )}
        </li>
        <li>
          {next && (
            <StyledLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </StyledLink>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        img
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
