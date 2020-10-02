import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Main } from "../components/Main";
import { Card } from "../components/Card";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";

const loopThroughPosts = (posts) => {
  return posts.map(({ node }) => {
    const title = node.title;
    return (
      <Card
        img={
          node.featureImageSharp && node.featureImageSharp.childImageSharp.fluid
        }
        title={title}
        content={node.excerpt}
        slug={`/${node.slug}`}
        date={node.published_at_pretty}
      ></Card>
    );
  });
};

const BlogIndex = ({ data }) => {
  const posts = data.allGhostPost.edges;

  const preNewsletterPosts = posts.slice(0, 3);
  const postNewsletterPosts = posts.slice(3);

  return (
    <Grid>
      <Main>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
        />
        {loopThroughPosts(preNewsletterPosts)}
        <NewsletterSignup />
        {loopThroughPosts(postNewsletterPosts)}
      </Main>
    </Grid>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        node {
          excerpt
          title
          feature_image
          featureImageSharp {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          created_at
          slug
          published_at_pretty: published_at(formatString: "MMMM DD, YYYY")
          childHtmlRehype {
            html
          }
        }
      }
    }
  }
`;
