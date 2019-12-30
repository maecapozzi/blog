import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";
import { Text, TextWrapper } from "../components/Text";
import { theme } from "../styles/theme";
import { Main } from "../components/Main";
import { Header, HeadingWrapper } from "../components/Header";
import { Card } from "../components/Card";
import Bio from "../components/bio";

const LinkWrapper = styled(`div`)`
  margin: ${theme.spacings["6"]} ${theme.spacings["6"]} 0 ${theme.spacings["6"]};
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.tertiary};
  font-size: ${theme.fontSizes["7"]};
  font-weight: ${theme.fontWeights.heavy};
  text-decoration: none;
  line-height: ${theme.fontSizes["2"]};

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const DateWrapper = styled("div")`
  margin-bottom: ${theme.spacings["6"]};
  margin-left: ${theme.spacings["6"]};
  font-size: ${theme.fontSizes["3"]};
  font-weight: ${theme.fontWeights.light};
  font-style: italic;
  font-family: ${theme.fonts.secondary};
`;

const StyledImage = styled(Img)`
  border-radius: 6px;
  margin-top: ${theme.spacings["6"]};
`;

const BlogIndex = props => {
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
        images.forEach(image => {
          if (image.node.fluid.originalName === node.frontmatter.img) {
            headerImage = image;
          }
        });

        const title = node.frontmatter.title || node.fields.slug;
        return (
          <Card>
            <LinkWrapper>
              <StyledLink to={node.fields.slug}>{title}</StyledLink>
            </LinkWrapper>
            <DateWrapper>{node.frontmatter.date}</DateWrapper>
            {headerImage && (
              <Link to={node.fields.slug}>
                <StyledImage fluid={headerImage.node.fluid} />
              </Link>
            )}
            <TextWrapper>
              <Text>{node.excerpt}</Text>
            </TextWrapper>
          </Card>
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
