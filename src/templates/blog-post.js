import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import { Date } from "../components/Date";
import { Header, HeadingWrapper } from "../components/Header";
import { Text } from "../components/Text";

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
`;

const BodyWrapper = styled("div")`
  margin-top: ${props => props.theme.spacings["4"]};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.secondary};

  h2,
  h3 {
    font-family: ${props => props.theme.fonts.primary};
  }

  a {
    color: ${props => props.theme.colors.primary};

    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  p {
    font-size: ${props => props.theme.fontSizes["4"]};
  }
`;

const Main = styled("main")`
  margin: 0 auto;
  max-width: 800px;
  padding: ${props => props.theme.spacings["5"]};
`;

const BlogHeader = styled(Header)`
  font-weight: ${props => props.theme.fontWeights.heavy};
  margin: 0;
  font-size: ${props => props.theme.fontSizes["8"]};
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
`;

const BlogPostTemplate = props => {
  if (props.data.markdownRemark) {
    const post = props.data.markdownRemark;
    const { previous, next } = props.pageContext;
    const { title, img, date } = post.frontmatter;
    const { edges } = props.data.allImageSharp;

    function parseHtml() {
      return { __html: post.html };
    }

    return (
      <Main>
        <SEO title={title} description={post.excerpt} />
        <HeadingWrapper>
          <BlogHeader>{title}</BlogHeader>
          <Date>{date}</Date>
        </HeadingWrapper>
        {edges.map(image => {
          if (image.node.fluid.originalName === img) {
            return <Img key={img} fluid={image.node.fluid} />;
          }
          return undefined;
        })}
        <BodyWrapper>
          <div dangerouslySetInnerHTML={parseHtml()} />
        </BodyWrapper>
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
  }

  return null;
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
