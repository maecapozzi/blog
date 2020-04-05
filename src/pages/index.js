import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";
import { Main } from "../components/Main";
import { Header, HeadingWrapper } from "../components/Header";
import { Card } from "../components/Card";
import Bio from "../components/bio";
import { Date } from "../components/Date";

const LinkWrapper = styled(`div`)`
  margin: ${(props) => props.theme.spacings["6"]}
    ${(props) => props.theme.spacings["6"]} 0
    ${(props) => props.theme.spacings["6"]};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes["7"]};
  font-weight: ${(props) => props.theme.fontWeights.heavy};
  text-decoration: none;
  line-height: ${(props) => props.theme.fontSizes["2"]};

  &:hover {
    color: ${(props) => props.theme.colors.gray2};
  }
`;

const DateWrapper = styled("div")`
  margin-bottom: ${(props) => props.theme.spacings["6"]};
  margin-left: ${(props) => props.theme.spacings["6"]};
  font-size: ${(props) => props.theme.fontSizes["3"]};
  font-weight: ${(props) => props.theme.fontWeights.light};
  font-style: italic;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

const StyledImage = styled(Img)`
  border-radius: 6px;
  margin-top: ${(props) => props.theme.spacings["6"]};
`;

const BlogIndex = (props) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;
  const images = data.allImageSharp.edges;

  return (
    <Main>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, `gatsby`]}
      />
      <HeadingWrapper>
        <Header>Blog</Header>
      </HeadingWrapper>
      <Bio />
      {posts.map(({ node }) => {
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
      })}
    </Main>
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
