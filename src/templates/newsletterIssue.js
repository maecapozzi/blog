import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Date } from "../components/Date";
import { HeadingWrapper } from "../components/Header";
import { Page } from "../components/Page";
import { SocialShare } from "../components/SocialShare";
import { Title, Badge } from "../components/Card";

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
    text-decoration: none;

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

const NewsletterIssue = (props) => {
  if (props.data.markdownRemark) {
    const post = props.data.markdownRemark;
    const { title, img, date, tags } = post.frontmatter;
    const { edges } = props.data.allImageSharp;

    function parseHtml() {
      return { __html: post.html };
    }

    return (
      <Page
        seoTitle={post.frontmatter.title}
        seoDescription={post.excerpt}
        metaImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Newsletter.jpg"
        twitterImage="https://s3.us-east-2.amazonaws.com/maecapozzi.com/twitter-images/DS-Newsletter.jpg"
        twitterImageAlt="Design Systems Newsletter, design systems tips and jobs sent right to your inbox."
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
        <SocialShare post={post} />
      </Page>
    );
  }

  return null;
};

export default NewsletterIssue;

export const pageQuery = graphql`
  query NewsletterBySlug($slug: String!) {
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        img
        path
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
