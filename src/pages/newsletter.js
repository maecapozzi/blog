import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { LayoutGrid, GridColumn } from "../components/Grid";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { NewsletterSignup } from "../components/NewsletterSignup";

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.spacings["6"]};
`;

const Newsletter = (props) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  return (
    <LayoutGrid>
      <SEO
        title="Newsletter Issues"
        keywords={[
          `blog`,
          `design systems`,
          `design systems newsletter`,
          `design tokens`,
          `component libraries`,
        ]}
      />

      <GridColumn columnStart={["3", "5", "10"]} columnEnd={["24", "22", "20"]}>
        <Wrapper>
          <Header>Newsletter</Header>
        </Wrapper>
        <Text>
          Read past issues of the newsletter, or sign up for the next issue
          below.
        </Text>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Card
              title={title}
              slug={node.fields.slug}
              date={node.frontmatter.date}
            ></Card>
          );
        })}
        <NewsletterSignup />
      </GridColumn>
    </LayoutGrid>
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
      filter: { fileAbsolutePath: { regex: "/newsletter/" } }
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
