import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Page } from "../components/Page";

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.spacings["6"]};
`;

const Newsletter = (props) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Page seoTitle="Newsletter Issues">
      <Header>Newsletter</Header>
      <Text>
        Read past issues of the newsletter, or sign up for the next issue below.
      </Text>
      <Wrapper>
        <NewsletterSignup slug={props.path} />
      </Wrapper>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        console.log("slug", node.fields.slug);
        return (
          <Card
            title={title}
            slug={node.fields.slug}
            date={node.frontmatter.date}
          ></Card>
        );
      })}
    </Page>
  );
};

export default Newsletter;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "content/newsletter/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            img
            excerpt
            tags {
              name
            }
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
