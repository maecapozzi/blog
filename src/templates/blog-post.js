import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
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
      color: ${(props) => props.theme.colors.primary};
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

const ImgWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacings["4"]};
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
      <LayoutGrid>
        <SEO title={title} description={post.excerpt} />
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
              return (
                <ImgWrapper>
                  <Img key={img} fluid={image.node.fluid} />
                </ImgWrapper>
              );
            }
            return undefined;
          })}
          <BodyWrapper>
            <div dangerouslySetInnerHTML={parseHtml()} />
          </BodyWrapper>
          <hr />
          <NewsletterSignup slug={props.path} />
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
