import React from "react";
import SEO from "../components/seo";
import { Main } from "../components/Main";
import { Header, HeadingWrapper } from "../components/Header";
import { Card } from "../components/Card";
import { NewsletterSignup } from "../components/NewsletterSignup";
import { Grid } from "../components/Grid";

const loopThroughPosts = (posts, images) => {
  return posts.map(({ node }) => {
    let headerImage;
    images.forEach((image) => {
      if (image.node.fluid.originalName === node.frontmatter.img) {
        headerImage = image;
      }
    });

    const title = node.frontmatter.title || node.fields.slug;
    return (
      <Card
        img={headerImage && headerImage.node.fluid}
        title={title}
        content={node.frontmatter.excerpt || node.excerpt}
        slug={node.fields.slug}
        date={node.frontmatter.date}
      ></Card>
    );
  });
};

const BlogIndex = (props) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  const images = data.allImageSharp.edges;

  const preNewsletterPosts = posts.slice(0, 3);
  const postNewsletterPosts = posts.slice(3);

  return (
    <Grid>
      <Main>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
        />
        <HeadingWrapper>
          <Header>Blog</Header>
        </HeadingWrapper>
        {loopThroughPosts(preNewsletterPosts, images)}
        <NewsletterSignup />
        {loopThroughPosts(postNewsletterPosts, images)}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
