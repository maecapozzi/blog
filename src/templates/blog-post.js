import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import { Date } from "../components/Date";
import { HeadingWrapper } from "../components/Header";
import { Text } from "../components/Text";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";
import { Main } from "../components/Main";
import { Title, Badge } from "../components/Card";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
`;

const BodyWrapper = styled("div")`
  margin-top: ${(props) => props.theme.spacings["7"]};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.secondary};

  h2 {
    margin-top: 62px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: ${(props) => props.theme.fontSizes["7"]};
  }

  h3 {
    margin-top: 62px;
    font-family: ${(props) => props.theme.fonts.primary};
  }

  a {
    color: ${(props) => props.theme.colors.highlight};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  p,
  ol,
  li {
    font-size: ${(props) => props.theme.fontSizes["3"]};
    line-height: 1.5;
  }

  img {
    border-radius: 5px;
  }

  .language-text {
    padding: 2px 8px;
  }
`;

const BlogPostTemplate = (props) => {
  if (props.data.markdownRemark) {
    const post = props.data.markdownRemark;
    const { previous, next } = props.pageContext;
    const { title, img, date, tags } = post.frontmatter;
    const { edges } = props.data.allImageSharp;

    function parseHtml() {
      return { __html: post.html };
    }

    return (
      <Grid>
        <Main>
          <SEO title={title} description={post.excerpt} />
          <HeadingWrapper>
            <Title>{title}</Title>
            <Date>{date}</Date>
            {tags && tags.map((tag) => <Badge>{tag.name}</Badge>)}
          </HeadingWrapper>
          {edges.map((image) => {
            if (image.node.fluid.originalName === img) {
              return <Img key={img} fluid={image.node.fluid} />;
            }
            return undefined;
          })}
          <BodyWrapper>
            <div dangerouslySetInnerHTML={parseHtml()} />
          </BodyWrapper>
          <hr />
          <NewsletterSignup />
          <ul
            style={{
              display: `flex`,
              listStyle: `none`,
              justifyContent: `space-between`,
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
      </Grid>
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
        tags {
          name
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
