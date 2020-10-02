import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import { Date } from "../components/Date";
import { HeadingWrapper } from "../components/Header";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";
import { Main } from "../components/Main";
import { Title } from "../components/Card";

const BodyWrapper = styled("div")`
  margin-top: ${(props) => props.theme.spacings["5"]};
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

const BlogPostTemplate = ({ data }) => {
  if (data.ghostPost) {
    const post = data.ghostPost;

    const { title } = post;

    return (
      <Grid>
        <Main>
          <SEO title={title} description={post.excerpt} />
          <HeadingWrapper>
            <Title>{title}</Title>
            <Date>{post.published_at_pretty}</Date>
          </HeadingWrapper>
          <Img
            key={post.feature_image}
            fluid={
              post.featureImageSharp &&
              post.featureImageSharp.childImageSharp.fluid
            }
          />
          <BodyWrapper>
            <div
              dangerouslySetInnerHTML={{
                __html: post.childHtmlRehype.html,
              }}
            />
          </BodyWrapper>
          <hr />
          <NewsletterSignup />
          <ul
            style={{
              display: `flex`,
              listStyle: `none`,
              justifyContent: `space-between`,
            }}
          ></ul>
        </Main>
      </Grid>
    );
  }

  return null;
};

export default BlogPostTemplate;

export const ghostPostFields = graphql`
  fragment GhostPostFields on GhostPost {
    # Main fields
    id
    title
    slug
    featured
    feature_image
    excerpt
    custom_excerpt
    visibility
    # Dates formatted
    created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
    published_at_pretty: published_at(formatString: "MMMM DD, YYYY")
    updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")
    # Dates unformatted
    created_at
    published_at
    updated_at
    # SEO
    meta_title
    meta_description
    og_description
    og_image
    og_title
    twitter_description
    twitter_image
    twitter_title
    # Authors
    authors {
      name
      slug
      bio
      # email
      profile_image
      twitter
      facebook
      website
    }
    primary_author {
      name
      slug
      bio
      # email
      profile_image
      twitter
      facebook
      website
    }
    # Tags
    primary_tag {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }
    tags {
      name
      slug
      description
      feature_image
      meta_description
      meta_title
      visibility
    }
    # Content
    plaintext
    html
    featureImageSharp {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    childHtmlRehype {
      html
    }
    # Additional fields
    url
    canonical_url
    uuid
    codeinjection_foot
    codeinjection_head
    codeinjection_styles
    comment_id
    reading_time
  }
`;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
