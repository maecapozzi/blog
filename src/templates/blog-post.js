import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import { theme } from "../styles/theme";
import { Date } from "../components/Date";
import { Header, HeadingWrapper } from "../components/Header";
import { Text } from "../components/Text";

const StyledLink = styled(Link)`
  color: ${theme.colors.tertiary};
`;

const Main = styled("main")`
  margin: 0 auto;
  max-width: 800px;
  padding: ${theme.spacings["5"]};
`;

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;
  const { title, img, date } = post.frontmatter;
  const { edges } = props.data.allImageSharp;

  return (
    <Main>
      <SEO title={title} description={post.excerpt} />
      <HeadingWrapper>
        <Header>{title}</Header>
        <Date>{date}</Date>
      </HeadingWrapper>
      <hr />
      {edges.map(image => {
        if (image.node.fluid.originalName === img) {
          return <Img key={img} fluid={image.node.fluid} />;
        }
        return undefined;
      })}
      <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
      <hr />
      <ul
        style={{
          display: `flex`,
          listStyle: `none`,
          justifyContent: `space-between`
        }}
      >
        <li>
          {previous && (
            <Text>
              <StyledLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </StyledLink>
            </Text>
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
    </Main>
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
      excerpt(pruneLength: 250)
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
