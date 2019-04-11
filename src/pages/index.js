import React from "react";
import { Link, graphql } from "gatsby";
import "typeface-inconsolata";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2a3132;

  &:hover {
    color: #0482e3;
  }
`;

const PostWrapper = styled("div")`
  padding: 20px 0;
`;

const DateWrapper = styled("div")`
  margin-bottom: 20px;
`;
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <PostWrapper key={node.fields.slug}>
              <Header>
                <StyledLink style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </StyledLink>
              </Header>
              <DateWrapper>
                <small>{node.frontmatter.date}</small>
              </DateWrapper>
              <Text dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </PostWrapper>
          );
        })}
      </Layout>
    );
  }
}

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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
