import React from "react";
import getShareImage from "@jlengstorf/get-share-image";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Date } from "../components/Date";
import { HeadingWrapper } from "../components/Header";
import { Text } from "../components/Text";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { LayoutGrid, GridColumn } from "../components/Grid";

import { Title, Badge } from "../components/Card";

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
`;

const BodyWrapper = styled("div")`
  margin-top: ${(props) => props.theme.spacings["7"]};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};

  h2 {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes["7"]};
  }

  h3 {
    margin-top: 62px;
    font-family: ${(props) => props.theme.fonts.secondary};
  }

  a {
    color: ${(props) => props.theme.colors.highlight};

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  p,
  ol,
  li,
  a {
    font-size: ${(props) => props.theme.fontSizes["6"]};
    font-family: ${(props) => props.theme.fonts.primary};
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
    const { previous, next, socialImage } = props.pageContext;
    const { title, img, date, tags } = post.frontmatter;
    const { edges } = props.data.allImageSharp;

    function parseHtml() {
      return { __html: post.html };
    }

    console.log(socialImage);

    return (
      <LayoutGrid>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="image" content={socialImage} />

          {/* OpenGraph tags */}
          <meta
            property="og:url"
            content={`https://maecapozzi.com${post.slug}`}
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:image" content={socialImage} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@MCapoz" />
          <meta name="twitter:creator" content="@MCapoz" />
        </Helmet>
        <GridColumn
          columnStart={["3", "5", "10"]}
          columnEnd={["24", "22", "20"]}
        >
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
          <ul
            style={{
              margin: `0px`,
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
                <Text>
                  <StyledLink to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </StyledLink>
                </Text>
              )}
            </li>
          </ul>
          <NewsletterSignup />
        </GridColumn>
      </LayoutGrid>
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
